---
title: Theming
date: 2019-06-06
locale: es
image: art-artistic-canvas.jpg
---

Gestionar temas en la web con [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) es muy fácil tal y como te explico en este artículo.

<!-- more -->

Los temas son un aspecto importante en el desarrollo web y, aunque tu página web no requiera diferentes temas deberíamos desarrollar estilos visuales como el color, el espaciado, las fuentes, animaciones fuesen a cambiar cada día. ¿Por qué? Porque esto es lo que cambia más a menudo. Si lo hacemos bien, un rebranding, introducir un tema oscuro o ajustar colores va a ser muy fácil.

> "deberíamos desarrollar estilos visuales como el color, el espaciado, las fuentes, animaciones como si fuesen a cambiar todo el día."

## Custom properties

Las [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) de CSS son un verdadero regalo. Abren muchas posibilidades por su dinamismo intrínseco. Podemos crear una custom property en cualquier elemento como se muestra a continuación:

```css
.class {
    --a-custom-property: 42px;
}
```

Ahora todos los hijos de este elemento podrán acceder a esta custom property:

```css
.class-child {
    margin-bottom: var(--a-custom-property);
}
```

También podemos darle valores por defecto en caso de no ser declarada:

```css
.class-child {
    margin-bottom: var(--a-custom-property, 12px);
}
```

Y lo más increíble es que podemos cambiar los valores de las custom properties por CSS o JavaScript:

```css
@media (max-width: 800px) {
    .class-child {
        --a-custom-property: 56px;
    }
}
```

_Nota: Uno podría pensar que se podrían usar custom properties en las media queries pero por ahora no podremos hasta que la propiedad [env](https://developer.mozilla.org/en-US/docs/Web/CSS/env) sea soportada en Edge e Internet Explorer (a Junio de 2019)._

## Theming

Así que, usando custom properties, ¿cómo podemos añadir un tema a una página web? Bueno, lo primero es crear un fichero `colors.css`:

```css
:root {
    --white-color: hsla(0, 0%, 100%, 0.88);
    --white-light-color: hsl(0, 0%, 98%);
    --black-color: hsl(0, 1%, 15%);
    --dark-blue: hsl(222, 14%, 18%);
    --gray-color: hsl(150, 2%, 79%);
    --blue-color: hsl(229, 87%, 44%);
    --blue-light-color: hsl(206, 68%, 55%);
    --blue-dark-color: hsl(219, 16%, 16%);
    --teal-color: hsl(184, 97%, 37%);
    --orange-color: hsl(32, 100%, 50%);
}
```

_Nota: El selector `:root` selecciona el elemento root del documento._

Ahora, si el color cambia lo único que tendríamos que hacer es cambiar este fichero. Pero, ¿deberíamos referenciar directamente en los componentes o en CSS? La respuesta es no, deberíamos añadir una indirección. Imagina el siguiente caso: declaramos en todos los componentes el uso de la custom property `--orange-color`. Sin embargo, un nuevo rediseño requiere que el color principal de la app (que es `--orange-color`) a un color azul. Ahora, para hacer ese cambio tendríamos que hacer lo siguiente:

```css
:root {
    --orange-color: blue;
}
```

Pero esto está mal a muchos niveles (como un ascensor roto). De primeras, el uso de los nombres no son representativos y pueden confundir al equipo. ¿Qué ocurre si necesitamos una nueva custom property para el color azul? ¿Haríamos esto `--real-blue: darkblue;`? Esto sería una locura.

¿Cómo podemos afrontar este problema? La respuesta está en el párrafo anterior: "un nuevo rediseño requiere que el color principal de la app (que es `--orange-color`) a un color azul". Lo que tenemos que identificar es el color principal de la app, también conocido como el **color primario**. Después de esto deberíamos identificar el **color secundario** u otros colores y lo que representan. Podemos gestionar todo esto en un fichero `palette.css`:

```css
:root {
    --primary-color: var(--orange-color);
    --secondary-color: var(--teal-color);
}
```

Otra cosa que podríamos hacer es declarar un color de fondo y un color de primer plano, esto nos permite crear un tema oscuro y un tema claro:

```css
:root {
    --foreground-color: var(--black-color);
    --background-color: var(--white-color);
}
```

Para cambiar a un modo oscuro lo único que tendríamos que hacer es intercambiar los valores:

```css
:root {
    --foreground-color: var(--white-color);
    --background-color: var(--black-color);
}
```

## Conclusión

Gestionar los temas como hemos visto en este artículo puede ahorrarnos muchos dolores de cabeza. Pero es importante pensar en qué propiedades asignamos a los componentes y extraer el mayor número de conceptos de negocio. Por ejemplo, para gestionar un estado erróneo que hoy en día es representado en rojo, lo que deberíamos añadir es una nueva custom property: `--error-color: var(--red-color);`, que si mañana cambia, podremos cambiar a `--error-color: var(--orange-color);`.
