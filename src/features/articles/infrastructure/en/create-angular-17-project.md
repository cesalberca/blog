---
title: Create an Angular 17 project
date: 2024-04-25
locale: en
image: create-angular-17-project/project-creation.png
---

In this article, we will explore setting up a new Angular project with SSR (Server-Side Rendering) and see what new configurations it brings. In the following tutorial, we will learn how to enhance the default configuration and add other development tools.

<!-- more -->

## Project Creation

The first step is to create a new Angular project from scratch using the following command:

```bash
npm init @angular **ng-future**
```

We select the option "Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)," which is already prepared for production environments.

With the SSR option enabled, Angular will create two execution environments: client and server. The novel aspect is that it is fully integrated into the Angular CLI. SSR improves performance and other important metrics without needing to install the Angular Universal package, which would become deprecated.

## Project Structure

If we examine the project structure, we will see that it has created a series of configuration files for both the client and server parts. Here's a summary:

| Client        | Server               |
| ------------- | -------------------- |
| main.ts       | main.server.ts       |
| app.config.ts | app.config.server.ts |
| ~             | server.ts            |

### `server.ts`

This file initializes a [NodeJS](https://nodejs.org/en) server with [Express](https://expressjs.com/) with the following content:

```typescript
import { APP_BASE_HREF } from '@angular/common'
import { CommonEngine } from '@angular/ssr'
import express from 'express'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import bootstrap from './src/main.server'

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express()
  const serverDistFolder = dirname(fileURLToPath(import.meta.url))
  const browserDistFolder = resolve(serverDistFolder, '../browser')
  const indexHtml = join(serverDistFolder, 'index.server.html')

  const commonEngine = new CommonEngine()

  server.set('view engine', 'html')
  server.set('views', browserDistFolder)

  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
    }),
  )

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then(html => res.send(html))
      .catch(err => next(err))
  })

  return server
}

function run(): void {
  const port = process.env['PORT'] || 4000

  // Start up the Node server
  const server = app()
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`)
  })
}

run()
```

It bootstraps the server application and exposes static assets (CSS, HTML, fonts, images, etc.) with the following code:

```typescript
server.get(
  '*.*',
  express.static(browserDistFolder, {
    maxAge: '1y',
  }),
)
```

Here, a [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) like CloudFront could be integrated to serve static files and cache them.

### `main.server.ts`

In this file, we have an exported `bootstrap` function used in `server.ts` to launch the server-side application. The root component `AppComponent` is also loaded. Noticeably, there is no mention of Angular Modules, as the new Standalone Components are used (we'll delve into this in another section):

```typescript
import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { config } from './app/app.config.server'

const bootstrap = () => bootstrapApplication(AppComponent, config)

export default bootstrap
```

### `main.ts`

This file contains the code responsible for launching the client-side application. It's very similar to `main.server.ts` except for different configuration usage, utilizing `app.config`:

```typescript
import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err))
```

### `app.config.ts`

The configuration in `appConfig` includes a new provider that bridges the gap between the client and the server: `provideClientHydration()`. With this new provider, we ensure that the client and server do not duplicate their work.

```typescript
import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()],
}
```

### `app.config.server.ts`

Finally, we have `app.config.server.ts`, which loads a new provider: `provideServerRendering()`:

```typescript
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideServerRendering } from '@angular/platform-server'
import { appConfig } from './app.config'

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
}

export const config = mergeApplicationConfig(appConfig, serverConfig)
```

## Where Are the NgModules?

Angular encourages developers to avoid using modules, a decision that I believe is correct. The main problem with modules is that they introduce a lot of boilerplate, making it easy to miss a necessary dependency, potentially breaking the application substantially, and it's easy to include unnecessary dependencies, adding unnecessary weight to a bundle that is already quite heavy for a "Hello, world" application.

## Conclusion

As we've seen in this tutorial, there are new configurations compared to previous versions, simplifying and reducing the number of files created with the Angular CLI when starting a new project.
