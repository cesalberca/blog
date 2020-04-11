---
title: ¿Por qué he migrado mi blog a Web Components?
date: 2020-04-11
locale: es
image: clouds-in-the-sky.jpg
---

¿Por qué he hecho la tercera y última migración (espero) de mi blog a Web Components? En este artículo te lo explico.

<!-- more -->

Primero mi blog estuvo en [Jekyll](https://jekyllrb.com/), luego pasé a [Vue](https://vuejs.org/), y la semana pasada, estaba por pasarlo a [Nuxt](https://nuxtjs.org/) con tal de mejorar el SEO. Pero en el último momento opté por ir a una solución más "agnóstica" y que contase con buen SEO. Así que elegí finalmente [LitElement](https://lit-element.polymer-project.org/).

¿Por qué este cambio tan _brusco_? Pues resulta que estaba teniendo problemas al hacer que funcionase la inyección de dependencias con SSR y parte en cliente. Y me hizo recapacitar en lo que verdaderamente estaba buscando que era simplemente buen SEO. ¿Tan difícil era esto sin recurrir a técnicas como SSR o tener ficheros HTML desperdigados sin ningún tipo de componente? No podía ser todo _tan complicado_. Y ahí recordé algo que me comentó [Manz](https://twitter.com/Manz), los Web Components, aunque se ejecuten en cliente, [tienen buen SEO](https://developers.google.com/search/docs/guides/javascript-seo-basics#web-components) y de hecho google apuesta por ellos.

> No podía ser todo tan complicado

Además del buen SEO estaba un poco desencantado con la idea de ir migrando cada X tiempo el blog al framework del momento. Y bueno, sí que es verdad que al final estoy usando LitElement me parece lo suficientemente sencillo como para estar bastante a gusto.

## Bundling web components

Y ya que estamos yendo hacia lo más nativo posible, ¿por qué no probar a no tener bundler? Sí, es una idea un poco loca, ¿verdad? ¿Nada que cree un único fichero para servir al cliente? ¿Por qué es esto necesario hoy por hoy cuando los ESModules [ya están soportados por los grandes navegadores](https://caniuse.com/#feat=es6-module)? ¿Por qué necesito Babel si tengo TypeScript que compila mi código para que lo entiendan los navegadores modernos? Todas estas preguntas me llevaron a elegir [Snowpack](https://www.snowpack.dev/), que lo que propone es coger las dependencias y moverlas a un directorio `web_modules` y en nuestro código en vez de hacer lo siguiente:

```
import { customElement } from 'lit-element'
```

Hagamos esto

```
import { customElement } from '/web_modules/lit-element.js'
```

Las reglas para usar snowpack son sencillas:

1. Los imports deben incluir la extensión por lo menos si queremos evitar hacer uso de Babel (aunque se puede obviar la extensión con [esta configuración](https://www.snowpack.dev/#importing-packages-by-name))
2. Cuando se instalan dependencias se deben incluir en el package.json dentro de la [configuración de Snowpack]():

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

## Proceso de migración

En mis proyectos apuesto por una arquitectura donde desacoplo la lógica de lo que hace mi aplicación de cómo entrego al usuario mi aplicación. Suelo seguir una arquitectura de 4 capas: **aplication**, **domain**, **infrastructure** y **ui**. Y esto me ha permitido hacer la migración de Vue a LitElement cambiando mayoritariamente la capa de **ui**.

¿Qué más capas he tenido que cambiar? Pues la capa de **infrastructure** ya que al no tener bundler los imports de los ficheros Markdown ya no los gestionaba Webpack con [frontmatter-markdown-loader](https://www.npmjs.com/package/frontmatter-markdown-loader) y tuve que sustituir la obtención de los artículos mediante peticiones HTTP con [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Algo tan cómodo como hacer import de ficheros que no son JavaScript es algo que introdujo Webpack y que siguieron los demás bundlers, pero no es algo nativo, no [de momento](https://github.com/tc39/proposal-module-attributes) por lo menos.

## Conclusiones
