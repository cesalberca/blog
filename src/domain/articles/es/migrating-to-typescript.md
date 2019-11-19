---
title: Migrando a TypeScript
date: 2019-11-19
locale: es
image: rainbow.jpeg
---

En este tutorial veremos cómo migrar una base de código JavaScript a [TypeScript](https://www.typescriptlang.org/). Vamos a migrar el código de mi charla Advanced JavaScript Patterns (irónico, ¿verdad?). [Aquí tenéis el repositorio](https://github.com/cesalberca/advanced-javascript-patterns). Y bueno, ya que estamos, si quieres ver la charla la podrás [ver aquí](https://www.youtube.com/watch?v=3nPPRvRcoo0&feature=youtu.be). ¡Comenzamos!

<!-- more -->


## Configuración

Lo primero de todo es incluir un fichero `tsconfig.json` en la raíz del proyecto. Este fichero especifica las opciones de TypeScript:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "outDir": "./dist",
    "allowJs": true,
    "target": "esnext"
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules"]
}
```

`moduleResolution` especifica cómo [debe resolver TypeScript las dependencias](https://www.typescriptlang.org/docs/handbook/module-resolution.html).

El `outDir` será el directorio donde tendremos nuestro código compilado y el que posteriormente desplegaremos o ejecutaremos. 

La opción `allowJs` nos permite hacer una migración incremental, lo que supone **una grandísima ventaja**.

`target` nos permite especificar a qué versión de JavaScript queremos compilar, pudiendo poner hasta la versión. `es3` lo que haría que nuestro código compilado lo pudiesen entender navegadores antiguos.

Por último, con `include` definimos qué rutas debe estar comprobando. Por convención deberíamos tener nuestro código en la carpeta `src`.

## Instalación

Ahora instalamos TypeScript como `dev-dependency`: `npm i typescript -DE`. Y podemos añadir a los scripts del `package.json` el script de compilación:

```json
"scripts": {
  "compile": "tsc --pretty"
}
```

Como no tenemos ningún fichero `.ts` al ejecutar este comando veremos como no nos salta ningún error.

![image-20191112213355655](../assets/migrating-to-typescript/image-20191112213355655.png)

## Migración

Probemos a cambiar la extensión de un fichero `.js` a `.ts`  y compilamos otra vez:

![image-20191112213602568](../assets/migrating-to-typescript/image-20191112213602568.png)

¿¡Cómo!? ¡Pero si este compila! Pues sí, **cualquier fichero JavaScript es código TypeScript perfectamente válido**. 

TypeScript por defecto infiere todo aquello que no entiendo como [any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any). Y `any` no mola. _Nada_. Con la opción `noImplicitAny` a `true` en nuestro `tsconfig.json` conseguiremos que nos avise de aquellos sitios que infiere algo como `any`:

```json
{
  "compilerOptions": {
    ...
    "noImplicitAny": true
    ...
  }
}
```

Y ahora si compilamos empezaremos a ver errores. Para obtener las ventajas de TypeScript como seguridad, refactorings y DX necesitamos ayudarle especificando los tipos. Y eso vamos a hacer:

```javascript
export function multiply(a = 1, b = 1) {
  return a * b
}

export function priceAfterTaxes(price, tax = multiply(21, 0.01)) {
  return price + price * tax
}
```

Pasa a ser:

```typescript
export function multiply(a = 1, b = 1) {
  return a * b
}

export function priceAfterTaxes(price: number, tax = multiply(21, 0.01)) {
  return price + price * tax
}
```

Aquí vemos que TypeScript no necesita que en la función `multiply` le tengamos que especificar que `a` o `b` son de tipo `number` ya que es suficientemente listo como para inferirlo. Y además si recibe dos parámetros que son de tipo number y hacemos una multiplicación, ¿cuál será el tipo de retorno? Pues `number`, claro.

### Never

El fichero `propValidator`:

```javascript
export function isRequired() {
  throw new TypeError('Argument is required')
}

export function capitalize(string = isRequired()) {
  return string.toUpperCase().slice(0, 1) + string.slice(1)
}
```

Se convierta a:

```typescript
export function isRequired(): never {
  throw new TypeError('Argument is required')
}

export function capitalize(string: string = isRequired()) {
  return string.toUpperCase().slice(0, 1) + string.slice(1)
}
```

`never` es un tipo interesante que especifica que algo nunca va a ocurrir. Es raro que se use, pero en este caso esta función, nunca retorna nada. Aquí vemos que TypeScript se adapta a la gran flexibilidad que ofrece JavaScript y rara vez no podremos modelar algo de JavaScript en TypeScript.

Si quieres ver los tipos básicos echa un ojo [a la documentación oficial](http://www.typescriptlang.org/docs/handbook/basic-types.html).

### Clases

Con clases veremos ciertas mejoras sintácticas respecto a JavaScript:

``` javascript
export class Subject {
  constructor() {
    this.observers = []
    this._counter = 0
  }

  set counter(value) {
    // https://github.com/tc39/proposal-private-fields
    this._counter = value
    this.notifyObservers()
  }

  get counter() {
    return this._counter
  }

  incrementCounter() {
    this.counter++
    this.notifyObservers()
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.notify(this))
  }
}
```

Pasa a ser:

```typescript
import { Observer } from './Observer'

export class Subject {
  private _counter = 0
  private readonly observers: Observer[]

  constructor() {
    this.observers = []
  }

  set counter(value) {
    // https://github.com/tc39/proposal-private-fields
    this._counter = value
    this.notifyObservers()
  }

  get counter() {
    return this._counter
  }

  incrementCounter() {
    this.counter++
    this.notifyObservers()
  }

  addObserver(observer: Observer) {
    this.observers.push(observer)
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.notify(this))
  }
}
```

Aquí ya no necesitamos usar la convención de usar `_` para especificar que una propiedad o método sea privada, si no que con TypeScript ya [disponemos de privacidad](http://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers) con `private` –también contamos con `protected` y `public`–. Por defecto si no especificamos nada todo es `public`.

Y además nos ahorramos tener que declarar tipos y hacer asignaciones en el constructor como vemos en este ejemplo del fichero `Observer`:

```javascript
export class Observer {
  constructor(subject) {
    this.subject = subject
    this.subject.addObserver(this)
    this.value = 0
  }

  display() {
    return `Observer counter: ${this.value}`
  }

  notify(subject) {
    this.value = subject.counter
  }
}

```

Que pasa a ser:

```typescript
import { Subject } from './Subject'

export class Observer {
  private value = 0

  constructor(private readonly subject: Subject) {
    this.subject.addObserver(this)
  }

  display() {
    return `Observer counter: ${this.value}`
  }

  notify(subject: Subject) {
    this.value = subject.counter
  }
}
```

Además en los constructores si definimos `private` o `public` lo siguiente:

```typescript
class Foo {
  foo: number
  
  constructor(foo: number) {
    this.foo = foo
  } 
}
```

Es análogo a esto:

```typescript
class Foo {  
  constructor(public foo: number) {} 
}
```

### Genéricos

Y por último vamos a ver este ejemplo más complicado:

```typescript
// Ya veremos como mejoraremos el any del tipo de retorno
export function createSafe(target: object): any {
  const handler = { 
    get(target: object, name: string | number | symbol, receiver: any) {
      if (hasKey(target, name)) {
        const targetElement = Reflect.get(target, name, receiver)

        if (isObject(targetElement)) {
          return createSafe(targetElement)
        }

        return targetElement
      }

      return notDefined
    }
  }
  return new Proxy(target, handler)
}

export const notDefined: object = new Proxy(
  {},
  {
    get() {
      return notDefined
    }
  }
)

export const either = (value: object, fallback: any) => (value === notDefined ? fallback : value)

const isObject = (obj: object) => typeof obj === 'object'
const hasKey = (obj: object, key: string | number | symbol) => key in obj


```
Ahora bien, no tenemos por qué pero podemos mejorar un poco los tipos. Dada la naturaleza del [proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) que estamos creando, el tipo del objeto que retornamos deberá ser el mismo que el tipo que le pasamos. Porque si no, cuando usemos esta función ocurrirá esto:

```typescript
const object = createSafe({ foo: 'bar' })
object.propertyThatDoesNotExist // OK
```

Así que tendremos un error en ejecución cuando podríamos haberlo detectado en compilación. Y además no tendremos autocompletado. Así que vamos a ser más exactos con los tipos.

```typescript
export function createSafe<Target>(target: Target): Target {
  const handler = {
    get(target: Target, name: string | number | symbol, receiver: any) {
      if (hasKey(target, name)) {
        const targetElement = Reflect.get(target, name, receiver)

        if (isObject(targetElement)) {
          return createSafe(targetElement)
        }

        return targetElement
      }

      return notDefined
    }
  }
  return new Proxy(target, handler)
}
```

Aquí estamos haciendo uso de un [genérico](https://www.typescriptlang.org/docs/handbook/generics.html). Los genéricos nos sirven para decir a TypeScript que un tipo puede tomar diferentes tipos a lo largo del programa, que es justo lo que pasa con esta función. Al tener un único parámetro, TypeScript sabe que el parámetro `target` dará forma al tipo `Target`:

```typescript
const foo = createSafe('hola') // foo se infiere como string
const bar = createSafe(1) // bar se infiere como number
```

Y sin embargo, si compilamos veremos que todavía tenemos un error:

![image-20191113201553918](../assets/migrating-to-typescript/image-20191113201553918.png)

¿Qué ocurre? Pues que aquí bien dice el genérico `Target` puede ser cualquier cosa aunque sea de un tipo en concreto. Lo que queremos decir es que Target será cualquier cosa que corresponda con el tipo `object`. Para esto necesitamos [limitaciones en los genéricos](https://www.typescriptlang.org/docs/handbook/generics.html#generic-constraints):

```typescript
export function createSafe<Target extends object>(target: Target): Target {
	...
}
```

Con `Target extends object` decimos que Target tendrá que ser de tipo objeto.

Uff, César, esto parece complejo, ¿no? Pues sí, porque el ejemplo que he elegido quería que fuese complicado por si te ves en la misma situación. El resto de código no hemos tenido problemas, ¿no?

## Nos volvemos estrictos

¿Y si te dijese que podrías hacer tu programa a prueba de fuego? Pues ahí entra el [modo strict](https://www.typescriptlang.org/docs/handbook/compiler-options.html) de TypeScript: 

```json
{
  "compilerOptions": {
    "strict": true
		...
  }
}

```

Con esta opción TypeScript nos ofrecerá más comprobaciones en cuanto a nulos, this, bind, call, apply e inicialización de propiedades.

Además, a mí me gusta poner estas otras opciones:

```json
{
  "compilerOptions": {
    "noFallthroughCasesInSwitch": true,
    "noUnusedParameters": true,
    "noUnusedLocals": true,
    "alwaysStrict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    ...
  }
}
```

Así, TypeScript me avisa cuándo me queda por controlar una rama en un switch, cuando no uso un parámetro en una función, cuando no uso un símbolo, cuando no todas las ramas de una función retornan valor o cuando no soy consistente en la capitalización de los imports de ficheros.

## Tests

El proyecto cuenta con tests hechos en [Jest](https://jestjs.io/). En cualquier tipo de refactor es buena idea tener una red de tests que nos cubran por si nos equivocamos. Porque claro, si TypeScript no compila no podré desplegar a producción, ¿no? No, TypeScript siempre compila a JavaScript, simplemente ignoraríamos los errores. Aunque claro, ¿si se quejase estarías seguro de lo que despliegas? 

Vamos a ejecutar los tests:

```bash
npm test
```

![image-20191113202705616](../assets/migrating-to-typescript/image-20191113202705616.png)

Oups, ¿qué pasa? Pues que [Jest](https://jestjs.io/), el test runner que estamos usando, no sabe compilar TypeScript, con lo que necesitamos algo de configuración. Añadimos [Babel](https://babeljs.io/) para que se encargue de eliminar los tipos antes de ejecutar los tests:

```bash
npm i @babel/preset-typescript -DE
```

Y creamos un fichero `babel.config.js` en la raíz del proyecto al cual añadimos el preset:

```typescript
module.exports = {
  presets: [
    '@babel/preset-typescript'
  ]
}

```

Añadimos configuración a `jest.config.js`:

```typescript
module.exports = {
  ...
  rootDir: 'src',
  moduleFileExtensions: ['ts', 'js']
}
```

¡Y pasamos los tests!

![image-20191115194956149](../assets/migrating-to-typescript/image-20191115194956149.png)

## Conclusión

Si quieres ver todo el código migrado echa un ojo a esta [pull request](https://github.com/cesalberca/advanced-javascript-patterns/pull/8/files). Si te ha quedado alguna duda acerca de TypeScript echa otro ojo a este [tutorial que compara TypeScript y JavaScript](https://www.adictosaltrabajo.com/2018/08/01/typescript-vs-javascript/). 

¿Y ahora _qué_? Pues verás la gran ganancia cuando toda una miríada de bugs desaparecen de tu aplicación, o cuando algo tan tonto como renombrar un símbolo se vuelva trivial o cómo tu programa ha quedado documentado de una forma viviente. Todas estas mejoras y muchas más de la mano de TypeScript.
