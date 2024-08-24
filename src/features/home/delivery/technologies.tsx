import type { FC } from 'react'
import Image from 'next/image'

import javascript from '../../../../public/assets/icons/javascript.svg'
import react from '../../../../public/assets/icons/react.svg'
import css from '../../../../public/assets/icons/css.svg'
import html from '../../../../public/assets/icons/html.svg'
import cypress from '../../../../public/assets/icons/cypress.svg'
import jest from '../../../../public/assets/icons/jest.svg'
import angular from '../../../../public/assets/icons/angular.svg'
import vue from '../../../../public/assets/icons/vue.svg'
import node from '../../../../public/assets/icons/node.svg'
import deno from '../../../../public/assets/icons/deno.svg'
import playwright from '../../../../public/assets/icons/playwright.svg'
import docker from '../../../../public/assets/icons/docker.svg'
import webstorm from '../../../../public/assets/icons/webstorm.svg'
import lit from '../../../../public/assets/icons/lit.svg'
import nextjs from '../../../../public/assets/icons/nextjs.svg'
import storybook from '../../../../public/assets/icons/storybook.svg'
import typescript from '../../../../public/assets/icons/typescript.svg'
import figma from '../../../../public/assets/icons/figma.svg'
import sass from '../../../../public/assets/icons/sass.svg'
import { Badge } from '@/components/ui/badge'

interface Technology {
  image?: string
  label: string
}

const allTechnologies: Technology[] = [
  { image: javascript, label: 'JavaScript' },
  { image: typescript, label: 'TypeScript' },
  { image: react, label: 'React' },
  { image: nextjs, label: 'Next.js' },
  { image: angular, label: 'Angular' },
  { image: vue, label: 'Vue' },
  { image: lit, label: 'Lit' },
  { image: html, label: 'HTML' },
  { image: css, label: 'CSS' },
  { image: sass, label: 'Sass' },
  { image: cypress, label: 'Cypress' },
  { image: playwright, label: 'Playwright' },
  { image: jest, label: 'Jest' },
  { image: node, label: 'Node' },
  { image: deno, label: 'Deno' },
  { image: docker, label: 'Docker' },
  { image: webstorm, label: 'Webstorm' },
  { image: storybook, label: 'Storybook' },
  { image: figma, label: 'Figma' },
]

export const Technologies: FC<{ technologies?: string[] }> = ({ technologies }) => {
  const renderedTechnologies =
    technologies?.map(technology => {
      const matchedTechnology = allTechnologies.find(t => t.label.toLowerCase() === technology.toLowerCase())
      return matchedTechnology || { label: technology }
    }) || allTechnologies

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 w-full">
      {renderedTechnologies.map(tech => (
        <div key={tech.label} className="flex flex-col items-center">
          {tech.image ? (
            <span className="flex flex-col items-center gap-2">
              <Image src={tech.image} alt={tech.label} height={20} width={20} />
              <small className="text-xs">{tech.label}</small>
            </span>
          ) : (
            <Badge variant="outline">{tech.label}</Badge>
          )}
        </div>
      ))}
    </div>
  )
}
