---
title: ¿Por qué he migrado mi blog<br/> a Web Components?
date: 2020-04-12
locale: es
image: clouds-in-the-sky.jpg
---

¿Por qué he hecho la tercera y última migración (_espero_) de mi [blog](https://github.com/cesalberca/blog) a Web Components? En este artículo te lo explico.

<!-- more -->

## ¿Por qué?

Primero mi blog estuvo en [Jekyll](https://jekyllrb.com/), luego pasé a [Vue](https://vuejs.org/) y la semana pasada estaba por pasarlo a [Nuxt](https://nuxtjs.org/) con tal de **mejorar el SEO**. Pero en el último momento opté por ir a una solución más _agnóstica_ y que contase con buen SEO. Así que finalmente elegí [LitElement](https://lit-element.polymer-project.org/).

¿Por qué este cambio _tan_ brusco? Pues empecé a poner en dudas cosas que había asumido durante mucho tiempo: ¿Tan difícil es tener buen SEO sin recurrir a técnicas como SSR o tener un framework de generación de sitios estáticos como [Gatsby](https://www.gatsbyjs.org/)? ¿Es realmente necesario incluir dependencias con **miles y miles de líneas de código**, con **tantas piezas** y con **tantas abstracciones** para hacer una página web hoy en día? No puede ser _tan complicado_. O por lo menos no debería. Y es ahí donde entran en juego los [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), que además de evitarnos incluir un framework complejo [tienen buen SEO](https://developers.google.com/search/docs/guides/javascript-seo-basics#web-components).

> No puede ser _tan complicado_.

Cuando comencé mi blog en Vue no había posibilidad de usar Web Components y que funcionasen en todos los navegadores modernos, pero a día de hoy, **sí**. Y si además de tener buen SEO, sigo una **orientación a la plataforma**, con **menos piezas**, **menos dependencias**, **menos transpilación _mágica_**, tendré menos superficie de fallo y creo que esto hará que el código sea **más robusto** y por tanto **dure más**.

Aquí tienes el código completo de mi blog: [https://github.com/cesalberca/blog](https://github.com/cesalberca/blog). Así, sin más dilación, empezamos con la primera pregunta: **¿cómo servimos los Web Components?**

## Bundling web components

Para servir los Web Components lo primero que miraríamos es de incluir [Webpack](https://webpack.js.org/) o [Parcel](https://parceljs.org/), ¿no? Pero puesto a poner en duda todo, ¿realmente necesitamos tener un bundler? Sí, es una idea un poco loca, ¿verdad? ¿Nada que cree un único fichero —es decir, un bundle— para servir al cliente? ¿Por qué es esto necesario hoy por hoy cuando los ESModules [ya están soportados por los navegadores modernos](https://caniuse.com/#feat=es6-module)?

> ¿Realmente necesitamos tener un bundler?

Todas estas preguntas me llevaron a elegir [Snowpack](https://www.snowpack.dev/), que lo que propone es coger las dependencias y moverlas a un directorio `web_modules` y en nuestro código en vez de hacer lo siguiente:

```typescript
import { customElement } from 'lit-element'
```

Hacemos esto:

```typescript
import { customElement } from '/web_modules/lit-element.js'
```

Porque la primera forma de importar no es nativa —no [de momento](https://github.com/WICG/import-maps) por lo menos— y por tanto los navegadores no lo entienden, por eso la pieza del bundler era tan **import**ante. Cada vez que el bundler veía un import de este tipo lo asociaba con `node_modules` y por tanto luego incluía el código pertinente en el bundle.

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
      presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
      plugins: [
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true,
          },
        ],
      ],
    },
  },
}
```

Y por último mi `jest.config.js`:

```javascript
module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '/web_modules/(.*)': '<rootDir>/web_modules/$1',
  },
  setupFiles: ['<rootDir>/tests/set-up.ts'],
}
```

El [jest-ts-webcompat-resolver](https://www.npmjs.com/package/jest-ts-webcompat-resolver) es para que al hacer imports desde TypeScript con la extensión en los tests funcione bien.

Y con esto ya podríamos ejecutar nuestros queridos tests.

## Conclusiones

El código del blog lo puedes ver en [Github](https://github.com/cesalberca/blog). Estoy bastante contento con el resultado. Ha sido bastante tiempo dedicado sobre todo a investigar cómo afrontar los problemas comunes del desarrollo Web de la forma más nativa posible. Y al final creo que he logrado mis objetivos: **tener buen SEO**, **simplificar** y **apostar por la plataforma**.

Creo que hoy en día todavía falta que el tooling se adapte a las nuevas formas de hacer las cosas y deje de lado APIs no nativas. Creo que es algo que ahora [Deno](https://deno.land/) está haciendo. Es algo que LitElement está haciendo. **Es algo que nosotros deberíamos hacer**.
