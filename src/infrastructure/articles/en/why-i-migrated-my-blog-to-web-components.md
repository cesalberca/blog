---
title: Why I migrated my blog to Web Components?
date: 2020-04-12
locale: en
image: clouds-in-the-sky.jpg
---

Why did I do the third and last migration (hopefully) of my [blog](https://github.com/cesalberca/blog) to Web Components? In this article I'll explain.

<!-- more -->

## Why

Initially my blog was powered by [Jekyll](https://jekyllrb.com/), then I migrated it to [Vue](https://vuejs.org/) and last week I was thinking about moving it to [Nuxt](https://nuxtjs.org/) so that I could improve my SEO and performance. But in the last moment I decided to approach it with a more _agnostic_ solution that could also improve my SEO. So I finally decided to do migrate it to [LitElement](https://lit-element.polymer-project.org/).

Why this change all of the sudden? Well, I was starting to wonder things that I had taken for granted: Is it so hard to have good SEO without using techniques like SSR or some framework like static sites generators like [Gatsby](https://www.gatsbyjs.org/)? Is it really neccessary to add dependencies with **thousands upon thousands of lines of code**, with **so many moving parts** and **so many abstraciones** to build a website nowadays? It _can't be that hard_. Or at least it shouldn't be. That's when [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) come into play, which a part from removing the need of using a complex framework they have [good SEO](https://developers.google.com/search/docs/guides/javascript-seo-basics#web-components).

> It can't be _that complicated_.

When I started my blog in Vue there wasn't a possibility to use Web Components which would work on all modern browsers, but today, it is a possibility. If choosing Web Components means also that I **bet on the platform**, **have less moving parts**, **less dependencies**, **less magical transpilation**, then I would have less surface for errors and that will make my code **more robust** so it will **last longer**.

Here you have the code for my blog: [https://github.com/cesalberca/blog](https://github.com/cesalberca/blog). And without further ado, let's answer the very first question: **how do we serve Web Components?**

## Bundling web components

To serve Web Components we should start looking to include [Webpack](https://webpack.js.org/) o [Parcel](https://parceljs.org/), right? But... Now that we are rethinking everything, do we really need a bundler? Yes, it seems like a crazy idea, right? Do we really need to create a single file —a bundle— to serve to the client? Why is it neccessary today when ESModules are [supported by all modern browsers](https://caniuse.com/#feat=es6-module).

> Do we really need a bundler?

All of these questions led me to choose [Snowpack](https://www.snowpack.dev/), which proposes taking the dependencies and moving them to a `web_modules` and in our code instead of doing:

```typescript
import { customElement } from 'lit-element'
```

We do this:

```typescript
import { customElement } from '/web_modules/lit-element.js'
```

Because the fiirst way of importing is not native —not now [at least](https://github.com/WICG/import-maps)— and browsers don't understand, that's why the piece of the bundler was so **import**ant. Everytime the bundler saw some import it would associate it with `node_modules` and so it included the related code in the bundle.

### Snowpack

Para usar Snowpack hay que tener en cuenta lo siguiente:

1. Los imports deben incluir la extensión. Por lo menos si queremos evitar hacer uso de Babel (aunque se puede obviar la extensión con [esta configuración](https://www.snowpack.dev/#importing-packages-by-name)). Con TypeScript hay que incluir aún así la extensión `.js`. Hay [un issue](https://github.com/microsoft/TypeScript/issues/16577) donde se habla más en profundidad sobre esto.
2. Cuando se instalan dependencias se deben incluir en el `package.json` dentro de la [configuración de Snowpack](https://www.snowpack.dev/#whitelisting-dependencies). En mi caso era necesario por RxJS, que no exporta ciertos operadores y por eso hay que ponerlo de forma explícita.

```json
{
    "snowpack": {
        "webDependencies": [
            "lit-html",
            "lit-element",
            "lit-html/directives/class-map.js",
            "lit-html/directives/style-map.js"
        ],
        "dedupe": ["lit-element", "lit-html"]
    }
}
```

Si ves que te funciona usando el siguiente comando entonces no pongas las `webDependencies`:

```bash
snowpack --include "src/**/*.ts"
```

Eso sí, en el momento que pongas una web dependency tendrás que quitar el `--include "src/**/*.ts"`.

3. Necesitas levantar un servidor local. No nos vale abrir el fichero `index.html` debido al script type module. En este caso he optado por [servor](https://github.com/lukejacksonn/servor) por ser sencillo y con opción de auto-reload.
4. Generar los `web_modules` cuando se añaden una nuevas dependencias. Poniéndolo en el script `prepare`:

```json
{
    "prepare": "snowpack"
}
```

5. Si usas [inversify](http://inversify.io/) con [inversify-props](https://github.com/CKGrafico/inversify-props) entonces deberás añadir la siguiente configuración en el `package.json`:

```json
{
    "snowpack": {
        "namedExports": {
            "inversify-props": ["injectable", "inject"]
        }
    }
}
```

Realmente eso es todo lo que debemos saber sobre Snowpack, una herramienta que **nos evita el tiempo de generación del bundle**, lo que nos puede ahorrar _bastante_ tiempo en desarrollo y nos **quita complejidad**.

## Proceso de migración

En mis proyectos apuesto por una arquitectura donde **desacoplo la lógica de lo que hace mi aplicación de cómo el usuario interactúa con mi aplicación**. Suelo seguir una arquitectura de 4 capas: **aplication**, **domain**, **infrastructure** y **ui**. Y esto me ha permitido hacer la migración de Vue a LitElement cambiando mayoritariamente la capa de **ui**. Si quieres saber más acerca de esto puedes mirar [esta charla](https://www.youtube.com/watch?v=NpjecaAgcVQ) que di sobre arquitectura.

¿Qué más capas he tenido que cambiar? Pues la capa de **infrastructure**, ya que al no tener bundler los imports de los ficheros Markdown ya no los gestiona Webpack con [frontmatter-markdown-loader](https://www.npmjs.com/package/frontmatter-markdown-loader). Tuve que sustituir la obtención de los artículos mediante peticiones HTTP con [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Algo tan cómodo como hacer import de ficheros que no son JavaScript es algo que introdujo Webpack y que siguieron los demás bundlers, pero no es algo nativo, no [de momento](https://github.com/tc39/proposal-module-attributes) por lo menos. Además, los import de CSS dentro de JavaScript, así como de SVG e imágenes tuve que sustituirlos por uso de links, img con urls o incluir los SVGs directamente.

Una cosa que me gusta de Vue es el tema de la reactividad y cómo incluso fuera de componentes se pueden hacer objetos reactivas usando el API de [Vue.observable](https://vuejs.org/v2/api/#Vue-observable). Usaba este API principalmente para el poco estado que tengo, que es la elección de tema y de idioma. Con LitElement no hay algo así, así que como no quería que mi estado estuviese acoplado a la vista, he optado por usar [RxJS](https://rxjs-dev.firebaseapp.com/) para guardar el estado en un BehaviourSubject.

Otra cosa que echaba en falta era el poder pasar props a mucho subhijos usando [Provide/Inject](https://vuejs.org/v2/api/#provide-inject). Aquí no hay un API parecido al API de [contexto](https://reactjs.org/docs/context.html) de React (que es de donde viene Provide/Inject de Vue). Pero al tener el estado centralizado en un store y pudiendo hacer inyección de dependencias con [inversify-props](https://github.com/CKGrafico/inversify-props) pude emular esa funcionalidad.

## Configuración

No necesitamos bundler, pero sí necesitamos ejecutar ciertas tareas. Por ejemplo, cuando compilamos TypeScript, TypeScript no copia los ficheros HTML, CSS y assets en lo compilado, lo tenemos que hacer nosotros a mano. Además, algo como minificar imágenes, que era tan sencillo con un plugin de Webpack lo tendremos que hacer nosotros invocando directamente a una biblioteca de procesado de imágenes.

Al final todo tiene sus pros y contras. Este diría que ha sido el mayor contra, que **muchas herramientas todavía no están realmente adaptadas a los ESModules**.

### Desarrollo

El copiado de ficheros lo hago con [cpx](https://www.npmjs.com/package/cpx), que tiene modo watch. Esto lo incluí en un script en el `package.json`:

```json
{
    "scripts": {
        "prestart": "run-s -l clean",
        "start": "run-p -l server copy:watch compile:watch",
        "clean": "rimraf dist",
        "copy:watch": "run-p copy:assets:watch copy:dependencies:watch",
        "copy:assets:watch": "cpx \"src/**/*.{jpg,jpeg,svg,png,css,html,ico,md}\" dist/ -w",
        "copy:dependencies:watch": "cpx \"web_modules/**/*.js\" dist/web_modules -w",
        "compile:watch": "tsc -w",
        "server": "servor dist index.html --reload --browse",
        "dependencies": "snowpack",
        "prepare": "run-s dependencies"
    }
}
```

Verás que hago uso de un comando raro: `run-s` y `run-p`. Bien, esto lo uso ya que tengo que ejecutar varios procesos a la vez, como es el watch de compilar, el watch de copiar y el servidor local. No puedo esperar a que uno termine para ejecutar el otro, ya que nunca terminaría de ejecutarse, por lo menos hasta que paremos el proceso manualmente.

`run-s` y `run-p` vienen del paquete [npm-run-all](https://www.npmjs.com/package/npm-run-all). La `s` quiere decir "sequentially" y la `p` es de "parallel".

Tras esto y con un fichero `index.html` donde importemos un script con type module ya podríamos empezar a ver algo:

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <link rel="stylesheet" rel="preload" href="ui/styles/base.css" />
        <script type="module" src="./index.js"></script>
    </head>
    <body>
        <cesalberca-blog></cesalberca-blog>
    </body>
</html>
```

### Producción

Para hacer la build es bastante parecido al proceso de `start` salvo que no necesitamos el modo watch. Además aprovecho para minificar las imágenes. No hago otro tipo de tratamiento de mi código como podrías ser [minificación](<https://en.wikipedia.org/wiki/Minification_(programming)>), [uglificación](https://www.quora.com/What-does-uglify-mean) o [tree shaking](https://en.wikipedia.org/wiki/Tree_shaking). Y asumo esos costes ya que de momento son triviales para el usuario.

Y una ganancia de no tener un bundle, es que el navegador ya se encarga de cachear los ficheros por ti.

```json
{
    "scripts": {
        "prebuild": "run-s -l clean",
        "build": "run-s -l dependencies copy compile",
        "postbuild": "run-s optimize",
        "clean": "rimraf dist",
        "copy": "run-s copy:assets copy:dependencies",
        "copy:assets": "cpx \"src/**/*.{jpg,jpeg,svg,png,css,html,ico,md}\" dist/",
        "copy:dependencies": "cpx \"web_modules/**/*.js\" dist/web_modules",
        "compile": "tsc",
        "optimize": "ts-node scripts/optimize.ts",
        "dependencies": "snowpack",
        "prepare": "run-s dependencies"
    }
}
```

### TypeScript

Para que funcionase bien la resolución de tipos de TypeScript tuve que añadir la siguiente configuración al `tsconfig.json`:

```json
{
    "compilerOptions": {
        "rootDir": "src",
        "baseUrl": ".",
        "paths": {
            "/web_modules/*.js": ["node_modules/@types/*", "node_modules/*", "web_modules/*.js"]
        }
    }
}
```

Así TypeScript sabe resolver cada vez que hagamos un import de `/web_modules` que los tipos tiene que resolverlos en `node_modules`.

Además tuve que añadir `inlineSourceMap` y `inlineSources` a true para que pudiese depurar con puntos de ruptura.

Mi configuración completa del `tsconfig.json` es esta:

```json
{
    "compilerOptions": {
        "target": "es2018",
        "module": "esnext",
        "outDir": "dist",
        "moduleResolution": "node",
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "inlineSourceMap": true,
        "inlineSources": true,
        "resolveJsonModule": true,
        "types": ["jest", "reflect-metadata", "node"],
        "lib": ["esnext", "dom", "dom.iterable"],
        "rootDir": "src",
        "baseUrl": ".",
        "paths": {
            "/web_modules/*.js": ["node_modules/@types/*", "node_modules/*", "web_modules/*.js"]
        },
        "allowSyntheticDefaultImports": true
    },
    "include": ["src/*"],
    "exclude": ["node_modules"]
}
```

### Testing

Para testear uso [Jest](https://jestjs.io/). Y aquí también tuve que adaptar la configuración para que funcionase correctamente. En este caso tuve que instalar las siguiente dependencias:

```bash
npm i @babel/core @babel/plugin-proposal-decorators @babel/preset-env @babel/preset-typescript @types/jest babel-jest jest jest-ts-webcompat-resolver -DE
```

Como vemos añadimos Babel, pero... ¿Por qué? Pues resulta que nosotros con Jest no ejecutamos los test sobre lo que se ha compilado de TypeScript, si no que **ejecutamos el test directamente sobre nuestros ficheros TypeScript**. ¿Eso quiere decir que Jest debería saber compilar TypeScript? Pues no, no del todo, pero ahí hace una cosa que parece un poco rara a priori y es usar Babel para quitar toda la información de tipos con tal de dejarlo en un fichero plano de JavaScript. Aunque claro, tiene sus inconvenientes así como sus ventajas. Esto se explica muy bien [aquí](https://iamturns.com/typescript-babel/).

En este caso únicamente uso Babel para los tests, para ello he incluido esta configuración en el `babel.config.js`:

```javascript
module.exports = {
    env: {
        test: {
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-typescript'
            ],
            plugins: [
                [
                    '@babel/plugin-proposal-decorators',
                    {
                        legacy: true
                    }
                ]
            ]
        }
    }
}
```

Y por último mi `jest.config.js`:

```javascript
module.exports = {
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
    resolver: 'jest-ts-webcompat-resolver',
    moduleNameMapper: {
        '/web_modules/(.*)': '<rootDir>/web_modules/$1'
    },
    setupFiles: ['<rootDir>/tests/set-up.ts']
}
```

El [jest-ts-webcompat-resolver](https://www.npmjs.com/package/jest-ts-webcompat-resolver) es para que al hacer imports desde TypeScript con la extensión en los tests funcione bien.

Y con esto ya podríamos ejecutar nuestros queridos tests.

## Conclusiones

El código del blog lo puedes ver en [Github](https://github.com/cesalberca/blog). Estoy bastante contento con el resultado. Ha sido bastante tiempo dedicado sobre todo a investigar cómo afrontar los problemas comunes del desarrollo Web de la forma más nativa posible. Y al final creo que he logrado mis objetivos: **tener buen SEO**, **simplificar** y **apostar por la plataforma**.

Creo que hoy en día todavía falta que el tooling se adapte a las nuevas formas de hacer las cosas y deje de lado APIs no nativas. Creo que es algo que ahora [Deno](https://deno.land/) está haciendo. Es algo que LitElement está haciendo. **Es algo que nosotros deberíamos hacer**.
