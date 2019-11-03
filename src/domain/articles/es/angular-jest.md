---
title: Jest Angular
date: 2019-11-03
locale: es
image: fog.gif
---

¿Quieres cambiar el dichoso Karma en Angular por un test runner en condiciones como Jest? ¡Pues entonces este tutorial es el tuyo!

<!-- more -->

[Jest](https://jestjs.io/) es un test runner creado por Facebook basado en Node. Es esto último lo que le hace tan rápido respecto a Karma, ya que no necesita de una navegador para ejecutar los tests. Y aunque recientemente se puede levantar Karma en modo headless cambiando a Jest podríamos conseguir ejecutar nuestros tests hasta **3 veces más rápido**.

¡Así que vamos a ello!

El primer paso será ejecutar el siguiente comando:

``` bash
npm uninstall -DE karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter
```

Con esto borraremos el billón de dependencias que necesitamos para ejecutar Karma.

A continuación borramos el fichero `karma.conf.js` y `src/test.ts`:

```bash
rm ./karma.conf.js ./src/test.ts
```

Después borraremos de `types`la propiedad `jasmine` y también quitaremos de `files` la propiedad `src/test.ts` en el `tsconfig.spec.json`. Debería quedar tal que así:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "node"
    ]
  },
  "files": [
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}

```

Añadiremos en el fichero `tsconfig.json` lo siguiente dentro de `compilerOptions`

```
"types": [
  "jest"
]
```

E instalaremos jest y builders-jest:

```bash
npm i -DE jest @types/jest @angular-builders/jest
```

Ahora dentro del `angular.json` sustituimos esta configuración:

```json
"test": {
  "builder": "@angular-devkit/build-angular:karma",
  "options": {
    "main": "src/test.ts",
    "polyfills": "src/polyfills.ts",
    "tsConfig": "tsconfig.spec.json",
    "karmaConfig": "karma.conf.js",
    "assets": [
      "src/favicon.ico",
      "src/assets"
    ],
    "styles": [
      "src/styles.css"
    ],
    "scripts": []
  }
}
```

por:

```json
"test": {
  "builder": "@angular-builders/jest:run",
}
```

Y por último añadimos en el `tsconfig.spec.json` en la opción de `compilerOptions`: `"esModuleInterop": true`.

¡Y ahora ejecutando `ng test` pasarás los tests con Jest!

Recapitulando, no solo nuestros tests irán más rápido, si no que los puntos de ruptura se lanzarán más exitosamente, necesitaremos menos dependencias, menos configuración y tendremos cosillas que nos aporta Jest como [test.each](https://jestjs.io/docs/en/api#1-testeachtable-name-fn-timeout), [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) y [utilidades para mockear](https://jestjs.io/docs/en/mock-functions).

Y si tienes ya un proyecto empezado y quieres migrar a Jest te recomiendo que eches un ojo a [este codemod](https://github.com/skovhus/jest-codemods) que migrar la mayor parte del código a Jest.
