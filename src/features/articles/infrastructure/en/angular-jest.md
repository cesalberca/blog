---
title: Jest Angular
date: 2019-11-03
locale: en
image: desert.jpg
---

You want to change [Karma](https://karma-runner.github.io/latest/index.html) in an Angular application to a better test runner like [Jest](https://jestjs.io/)? Then this tutorial is the one you were looking for!

<!-- more -->

[Jest](https://jestjs.io/) is a test runner created by Facebook based in Node. Is this last bit which makes it so fast compared to Karma, given that you don't need a browser to execute the tests. Even if you launch Karma headless, Jest still beats Karma running the same test suite for up to **3 times**.

So let's begin!

The first step is to execute this command:

```bash
npm uninstall -DE karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter
```

With this, we will remove the billion dependencies that you need to execute Karma.

Next, we will remove these files: `karma.conf.js` and `src/test.ts` using this command:

```bash
rm ./karma.conf.js ./src/test.ts
```

Now we will delete from `types` the property `jasmine` and we'll remove from the `files` option the property `src/tests.ts` in the `tsconfig.spec.json`. Our file should end up like this:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["node"]
  },
  "files": ["src/polyfills.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

We add to the `tsconfig.json` the following under `compilerOptions`:

```json
{
    ...
    "compilerOptions": {
        "types": ["jest"]
    }
    ...
}
```

We install `jest` and `builder-jest`:

```bash
npm i -DE jest @types/jest @angular-builders/jest
```

Now, in `angular.json` we replace this configuration:

```json
{
  "test": {
    "builder": "@angular-devkit/build-angular:karma",
    "options": {
      "main": "src/test.ts",
      "polyfills": "src/polyfills.ts",
      "tsConfig": "tsconfig.spec.json",
      "karmaConfig": "karma.conf.js",
      "assets": ["src/favicon.ico", "src/assets"],
      "styles": ["src/styles.css"],
      "scripts": []
    }
  }
}
```

with this one:

```json
{
  "test": {
    "builder": "@angular-builders/jest:run"
  }
}
```

Lastly, we add inside `tsconfig.spec.json` in the option `compilerOptions`: `"esModuleInterop": true`.

We can execute `ng test` and it will run the tests using Jest!

In conclusion, not only did we manage to run our tests faster, we also make the breakpoints launch with a higher success rate, we needed fewer dependencies, fewer configuration, and we'll have features that Jest provides us like [test.each](https://jestjs.io/docs/en/api#1-testeachtable-name-fn-timeout), [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) and [utilidades para mockear](https://jestjs.io/docs/en/mock-functions).

And if you have already started a project, and you want to migrate to Jest I recommend that you checkout out [this codemod](https://github.com/skovhus/jest-codemods) which will migrate most of the code to Jest.
