import React from 'react'
import { Link } from '@/core/components/link/link'

export const tableData = [
  {
    layer: 'UI Components',
    tooling: (
      <>
        <Link href="https://ui.shadcn.com/">shadcn/ui</Link>, <Link href="https://tailwindcss.com/">Tailwind</Link>,{' '}
        <Link href="https://www.radix-ui.com/">Radix</Link>
      </>
    ),
    aiRole: 'Generate, assemble',
  },
  {
    layer: 'Guidelines',
    tooling: (
      <>
        <code>.junie</code>, <Link href="https://storybook.js.org/">Storybook</Link>,{' '}
        <Link href="https://biomejs.dev/">Biome</Link>
      </>
    ),
    aiRole: 'Enforce standards',
  },
  {
    layer: 'Use Cases',
    tooling: 'Clean Architecture, CQRS, DI',
    aiRole: 'Route & execute intent',
  },
  {
    layer: 'Middleware',
    tooling: 'Chain of Responsibility',
    aiRole: 'Intercept, enrich, validate',
  },
  {
    layer: 'Agent Interface',
    tooling: (
      <>
        <Link href="https://openai.com/">OpenAI</Link>, <Link href="https://v0.dev/">V0.dev</Link>,{' '}
        <Link href="https://cursor.sh/">Cursor</Link>, <Link href="https://github.com/features/copilot">Copilot</Link>
      </>
    ),
    aiRole: 'Predict + propose actions',
  },
  {
    layer: 'Testing',
    tooling: (
      <>
        <Link href="https://vitest.dev/">Vitest</Link>, <Link href="https://playwright.dev/">Playwright</Link>, AI test
        generation
      </>
    ),
    aiRole: 'Verify logic and flows',
  },
]

export const esTableData = [
  {
    layer: 'Componentes UI',
    tooling: (
      <>
        <Link href="https://ui.shadcn.com/">shadcn/ui</Link>, <Link href="https://tailwindcss.com/">Tailwind</Link>,{' '}
        <Link href="https://www.radix-ui.com/">Radix</Link>
      </>
    ),
    aiRole: 'Generar, ensamblar',
  },
  {
    layer: 'Directrices',
    tooling: (
      <>
        <code>.junie</code>, <Link href="https://storybook.js.org/">Storybook</Link>,{' '}
        <Link href="https://biomejs.dev/">Biome</Link>
      </>
    ),
    aiRole: 'Aplicar estándares',
  },
  {
    layer: 'Casos de Uso',
    tooling: 'Clean Architecture, CQRS, DI',
    aiRole: 'Dirigir y ejecutar intenciones',
  },
  {
    layer: 'Middleware',
    tooling: 'Chain of Responsibility',
    aiRole: 'Interceptar, enriquecer, validar',
  },
  {
    layer: 'Interfaz de Agente',
    tooling: (
      <>
        <Link href="https://openai.com/">OpenAI</Link>, <Link href="https://v0.dev/">V0.dev</Link>,{' '}
        <Link href="https://cursor.sh/">Cursor</Link>, <Link href="https://github.com/features/copilot">Copilot</Link>
      </>
    ),
    aiRole: 'Predecir + proponer acciones',
  },
  {
    layer: 'Testing',
    tooling: (
      <>
        <Link href="https://vitest.dev/">Vitest</Link>, <Link href="https://playwright.dev/">Playwright</Link>,
        Generación de tests con IA
      </>
    ),
    aiRole: 'Verificar lógica y flujos',
  },
]
