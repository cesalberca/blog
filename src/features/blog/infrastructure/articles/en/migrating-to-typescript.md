---
title: Migrating to TypeScript
date: 2019-11-19
locale: en
image: rainbow.jpeg
---

In this tutorial we will see how to migrate a codebase from JavaScript to [TypeScript](https://www.typescriptlang.org/). We will migrate the code of my talk Advanced JavaScript Pattern (oh the irony, right?). [Here you have the repository](https://github.com/cesalberca/advanced-javascript-patterns). You can also watch [my talk here in Spanish](https://www.youtube.com/watch?v=3nPPRvRcoo0&feature=youtu.be). Let's start!

<!-- more -->

## Configuration

First of all is to include a `tsconfig.json` file in the root of your project. This file we will set the options for TypeScript:

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

`moduleResolution` specifies how [TypeScript is going to resolve the dependencies](https://www.typescriptlang.org/docs/handbook/module-resolution.html).

`outDir` will be the directory in which the TypeScript code will be compiled to. This will be the code that we will deploy or execute.

The `allowJs` option allows us to do an incremental migration, **which is great**!

`target` allows us to set the JavaScript version in which we want to compile to. We could also even set it to version `es3` making our code be executable in older browsers.

Lastly, with `include`, we define which routes TypeScript's compiler should be checking. By convention, we should have our code in the `src` directory.

## Installation

Now we install TypeScript as a `dev-dependency`: `npm i typescript -DE`. We add to the scripts of the `package.json` the script of compilation:

```json
{
  "scripts": {
    "compile": "tsc --pretty"
  }
}
```

Because we don't have any `.ts` file that we can compile we'll see that the compilation is successful:

![image-20191112213355655](infrastructure/articles/images/migrating-to-typescript/image-20191112213355655.png)

## Migration

Let's try change the extension from `.js` to `.ts` and compile again:

![image-20191112213602568](infrastructure/articles/images/migrating-to-typescript/image-20191112213602568.png)

What?! It compiles correctly! Well yes, **any JavaScript file is valid TypeScript code**.

TypeScript by default infers anything that it doesn't understand as [any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any). `any` is not cool, _not at all_. With the option `noImplicitAny` set to `true` in our `tsconfig.json` we will get an error in places TypeScript infers something to `any`.

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

Now when we compile we'll start to see some errors. To fully get TypeScript's advantages like: safety, refactorings and improved DX we need to help it by stating the types we use, and that's what we are going to do:

```javascript
export function multiply(a = 1, b = 1) {
  return a * b
}

export function priceAfterTaxes(price, tax = multiply(21, 0.01)) {
  return price + price * tax
}
```

Will become:

```typescript
export function multiply(a = 1, b = 1) {
  return a * b
}

export function priceAfterTaxes(price: number, tax = multiply(21, 0.01)) {
  return price + price * tax
}
```

Here we see that TypeScript doesn't need us to specify that `a` or `b` in the function `multiply` are `numbers` given that it's smart enough to infer it. Moreover, if it receives two parameters that are numbers, and we multiply them, what would the return type be? Well, obviously `number`.

### Never

Let's check the `propValidator` file:

```javascript
export function isRequired() {
  throw new TypeError('Argument is required')
}

export function capitalize(string = isRequired()) {
  return string.toUpperCase().slice(0, 1) + string.slice(1)
}
```

It becomes:

```typescript
export function isRequired(): never {
  throw new TypeError('Argument is required')
}

export function capitalize(string: string = isRequired()) {
  return string.toUpperCase().slice(0, 1) + string.slice(1)
}
```

`never` is a very interesting type which specifies something that's never going to change. It's not very common to use it, but in this case this function never returns anything. Here we see that TypeScript adapts to the great flexibility that JavaScript offers. It's in very few cases where we can't model a JavaScript program in TypeScript and there is always the `any` escape hatch.

If you want, you can checkout the basic types in [the official documentation](http://www.typescriptlang.org/docs/handbook/basic-types.html)

### Classes

With classes, we see certain advantages in respect to their counterparts in JavaScript:

```javascript
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

In TypeScript is:

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

Here we don't need to use anymore the convention `_` to specify that a property or method is private. With TypeScript, we have available to us [privacy](http://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers) with the `private` keyword –we also have `protected` and `public`–. By default, if we don't specify anything, it's `public`.

We also don't need to declare the types and do the assignations in the constructor like we do in the `Observer` file:

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

We can do as follows:

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

Moreover, if in the constructor we specify `private` or `public`:

```typescript
class Foo {
  foo: number

  constructor(foo: number) {
    this.foo = foo
  }
}
```

It's the same as this:

```typescript
class Foo {
  constructor(public foo: number) {}
}
```

### Generics

Let's see a more complex example:

```typescript
// Well later see how we can improve the any return type
export function createSafe(target: object): any {
  const handler = {
    get(target: object, name: string | number | symbol, receiver: any) {
      if (hasKey(target, name)) {
        const targetElement = Reflect.get(target, name, receiver)

        if (isObject(targetElement)) {
          return createSafe(targetElement)
        }

        return targetElement
      }

      return notDefined
    },
  }
  return new Proxy(target, handler)
}

export const notDefined: object = new Proxy(
  {},
  {
    get() {
      return notDefined
    },
  },
)

export const either = (value: object, fallback: any) => (value === notDefined ? fallback : value)

const isObject = (obj: object) => typeof obj === 'object'
const hasKey = (obj: object, key: string | number | symbol) => key in obj
```

Let's improve the types, because we are making use of `any` and we shouldn't. Given the nature of the [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that we are creating, the return type is the same as the type of element we are passing through the parameter of the function. Right now as we are marking it as `any` we could make mistakes and TypeScript wouldn't be able to tell us:

```typescript
const object = createSafe({ foo: 'bar' })
object.propertyThatDoesNotExist // OK
```

So we'll have a runtime error because we couldn't catch it in compilation. We can't even get the IDE to tell use what properties this object has. So let's be more exact with the types:

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
    },
  }
  return new Proxy(target, handler)
}
```

Here we are making use of a [generic](https://www.typescriptlang.org/docs/handbook/generics.html). Generics allow us to define a type which can take different values overtime, which is what we need for this function. Given that we have only one parameter TypeScript knows that the parameter `target` will obtain the value of the `Target` type:

```typescript
const foo = createSafe('hello') // foo is inferred as a string
const bar = createSafe(1) // bar is inferred as a number
```

Yet if we compile we'll see that we get the following error:

![image-20191113201553918](infrastructure/articles/images/migrating-to-typescript/image-20191113201553918.png)

What happened? Well, given that any type can be set to `Target` that raises a problem, as we only want `Target` to take any type that is of an object kind. So what we want here is [to constrain the type](https://www.typescriptlang.org/docs/handbook/generics.html#generic-constraints) that we can assign to `Target` to the `object` type:

```typescript
export function createSafe<Target extends object>(target: Target): Target {
	...
}
```

With `Target extends object` we are stating that `Target` can only be of type `object`.

Uff, César, this seems very complex, right? Well, yes, I wanted to show a complex example just in case you have a similar problem. The rest of the code was pretty straightforward, right?

## We become stricter

What if I told you that you can make you program fireproof? Well, you can, here the [strict more](https://www.typescriptlang.org/docs/handbook/compiler-options.html) comes into play:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

With this option TypeScript will offer more checks like nulls, this, bind, call, apply and property initialization. I also like setting the following options:

```json
{
  "compilerOptions": {
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedParameters": true,
    "noUnusedLocals": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

Now TypeScript will tell me when did I miss adding a branch in a switch statement, when did I put a parameter in a function that I don't use, when I don't use a symbol, when all the branches of a function return a value or when I'm not being consistent of the capitalization of imports in different files.

## Tests

This project has tests done with [Jest](https://jestjs.io/). In any refactor is a good idea to have a safety net like a test suite. If we make mistakes the tests will tell us. We also have TypeScript to check errors, but if TypeScript has errors, we won't be able to compile and deploy to production, right? Well, no, TypeScript always compiles to JavaScript, we could just _simply_ ignore the errors. Although, are you sure you want to deploy a program with possible errors?

Let's run the tests:

```bash
npm test
```

![image-20191113202705616](infrastructure/articles/images/migrating-to-typescript/image-20191113202705616.png)

Oups, what is happening? Well, [Jest](https://jestjs.io/), the test runner that we are using, doesn't know how to compile TypeScript, which requires some configuration. We add [Babel](https://babeljs.io/) so it can erase the types and then run the tests:

```bash
npm i @babel/preset-typescript -DE
```

We need to create a `babel.config.js` file in the root of our project:

```typescript
module.exports = {
  presets: ['@babel/preset-typescript'],
}
```

We add some configuration to `jest.config.js`:

```typescript
module.exports = {
  ...
  rootDir: 'src',
  moduleFileExtensions: ['ts', 'js']
}
```

And we run the tests!

![image-20191115194956149](infrastructure/articles/images/migrating-to-typescript/image-20191115194956149.png)

## Conclusion

If you want to see all the code that I migrated checkout this [pull request](https://github.com/cesalberca/advanced-javascript-patterns/pull/8/files). If you still have some doubts you can check this other [Spanish article I wrote](https://www.adictosaltrabajo.com/2018/08/01/typescript-vs-javascript/).

And now _what_? Well, you'll see the great advantages that TypeScript provides us like fewer bugs, be able to make a simple refactor as renaming a symbol, or a program that has a living documentation. This and many other advantages just by using TypeScript.
