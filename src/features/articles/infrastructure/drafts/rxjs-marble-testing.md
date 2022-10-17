---
title: Testing RxJs with Marble Testing
date: 2020-06-06
locale: en
image: marbles.jpg
---

[RxJS](https://rxjs-dev.firebaseapp.com/) is a powerful tool that allows us to think and code reactively. The frontend, being as dynamic as it is, is a place to use RxJS. However, it is not quite clear how can we test the observables that we create. And this tutorial aims to explain that.

## Marble testing

Given the following observable:

```typescript
import { from } from 'rxjs'
import { map } from 'rxjs/operators'

const observable = from([1, 2, 3]).pipe(map(x => x ** 2))
```

How could we test our observable? We could make it simple and do something as follows:

```typescript
import { from } from 'rxjs'
import { map } from 'rxjs/operators'

describe('observable', () => {
  it('should obtain the result', () => {
    const observable = from([1, 2, 3]).pipe(map(x => x ** 2))

    const actual = []
    const subscription = observable.subscribe(x => {
      actual.push(x)
    })

    expect(actual).toEqual([1, 4, 9])
    subscription.unsubscribe()
  })
})
```

And sometimes you might be able to use `.toPromise()` and test something that is one off:

```typescript
it('should obtain the result (toPromise)', async () => {
  const observable = from([3]).pipe(map(x => x ** 2))

  const actual = await observable.toPromise()

  expect(actual).toBe(9)
})
```

Although for simple cases doing a `toPromise` or a `subscription` might be enough there is a better way for more complex cases. [Marble testing](https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/testing/marble-testing.md). Marble testing is a set of utilities and a simple [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) to test our observables.

However the documentation seems lacking and quite difficult to understand for a beginner as me. So let's try and simplify it a little bit. Let's use the same example as before:

```typescript
import { TestScheduler } from 'rxjs/testing'
import { map } from 'rxjs/operators'

describe('observable', () => {
  it('should obtain the result', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })

    testScheduler.run(({ cold, expectObservable }) => {
      const actual = cold('a-b-c|').pipe(map(x => x.toUpperCase()))
      const expected = 'A-B-C|'

      expectObservable(actual).toBe(expected)
    })
  })
})
```

Let's go bit by bit. First we need a `TestScheduler`. This is needed in order to tell our testing framework how to do a deep equal comparison and provides a way to run our tests synchronously.

Then we tell it to `run`, which will run our observables synchronously.

In the `run` callback we receive an argument called `helpers`, which is an object that has some utilities like `cold` and `expectObservable`.

The `cold` function let us create an observable that starts the moment test starts executing.

`expectObservable` is the function we are going to use to make assertions.

So now that we have made a simple introduction let's move on to the next part; marble syntax.

When we make use of the `cold` function we have to pass a `marbleDiagram` which can look something like this: `a-b-c|`. The marble diagram is made of symbols that represent the lifecycle and emissions of the observable For instance the dash (`-`) means a frame of "virtual time". Virtual time is a fancy word which means that even though we may have a stream that emits values every second in our test we don't want to waste seconds waiting for it to emit in order to make assertions, so what we do is fake the time –virtualize it, if you will–.

> The marble diagram is made of symbols that represent the lifecycle and emissions of the observable

Another important character is `|` which marks when the observables finishes.

There are more characters but we will see them later.

## Values

There is another important aspect of marble testing, and it's using more complex `values`. Imagine that we emit numbers or other types instead of a simple letter:

```typescript
describe('observable', () => {
  it('should use values', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const values = {
        a: 1,
        b: 2,
        c: 3,
        x: 1,
        y: 4,
        z: 9,
      }

      const actual = cold('a-b-c|', values).pipe(map(x => x ** 2))
      const expected = 'x-y-z|'

      expectObservable(actual).toBe(expected, values)
    })
  })
})
```

When we make use of values the letter is being replaced by the key of the object that matches it. So in the observable we are emitting 1, 2 and then 3.

When we use expectObservable we can replace the result with the values, so in this case we are replace x with 1, y with 4 and z with 9.

We can use values to asign arrays, objects or any other type and it will get replaced:

```typescript
const values = {
  a: {
    foo: 'bar',
  },
  b: [1, 2, 3],
}
```

## Examples

Let's see some examples:

```typescript

```
