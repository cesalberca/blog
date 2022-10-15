---
title: Jest Angular
date: 2019-11-03
locale: es
image: desert.jpg
---

Las arquitecturas reactivas te permiten seguir un modelo de push en vez de pull. Encajan muy bien en el front, donde tenemos mucho estado y mucho dinamismo y reactividad. En este artículo te cuento como implementarlas con RxJS.

<!-- more -->

Utilizaremos de ejemplo esta aplicación web donde tienes el [código aquí](https://github.com/cesalberca/who-am-i). Está hecha con RxJS, Firebase y React. Es un juego de adivinar quién es quién en tiempo real. Puedes crear una sala o unirte a una sala existente. No tiene backend, con lo que la asignación aleatoria de personajes se hace mediante una Function to Firebase. Las partidas se guardan en Firestore.

Con este contexto podemos empezar con la arquitectura.

## Arquitectura por capas

Normalmente podemos identificar cuatro capas principales en una aplicación:

1. Domain
2. Application
3. Infrastructure
4. Delivery

El **dominio** es la capa más importante, aquí estará nuestra lógica de negocio, nuestro modelo, entidades, interfaces de repositorio y demás.

En **application** es donde guardamos el estado y nuestros [casos de uso](https://cesalberca.com/articles/use-cases-and-commands).

En **infrastructure** tendremos el código que está acoplado dentro de nuestro proyecto, por ejemplo un repositorio que hace peticiones HTTP está acoplado a un backend y a un protocolo en particular, y por tanto, debería estar en esta capa.

La capa **delivery** es cómo vamos a servir nuestra aplicación a un usuario. En front normalmente este medio es una aplicación web, pero no tendría por qué. Podríamos servirlo en una extensión, una aplicación móvil, un asistente por voz, etc.

## RxJS

Para gestionar observables suelo optar por RxJS, que cuenta con un montón de operadores para transformar y lidiar con los observables.
