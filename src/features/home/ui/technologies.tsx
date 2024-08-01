import type { FC } from 'react'
import Image from 'next/image'

// Consolidate icon imports into a single object for easier management and access
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
import capacitor from '../../../../public/assets/icons/capacitor.svg'
import docker from '../../../../public/assets/icons/docker.svg'
import intellij from '../../../../public/assets/icons/intellij.svg'
import java from '../../../../public/assets/icons/java.svg'
import kotlin from '../../../../public/assets/icons/kotlin.svg'
import lit from '../../../../public/assets/icons/lit.svg'
import nextjs from '../../../../public/assets/icons/nextjs.svg'
import storybook from '../../../../public/assets/icons/storybook.svg'
import typescript from '../../../../public/assets/icons/typescript.svg'
import sass from '../../../../public/assets/icons/sass.svg'
import { Badge } from '@/components/ui/badge'

interface Technology {
  image?: string // Optional since not all technologies have an image
  label: string
}

// Create an array of all available technologies
const allTechnologies: Technology[] = [
  { image: javascript, label: 'JavaScript' },
  { image: typescript, label: 'TypeScript' },
  { image: react, label: 'React' },
  { image: css, label: 'CSS' },
  { image: html, label: 'HTML' },
  { image: cypress, label: 'Cypress' },
  { image: playwright, label: 'Playwright' },
  { image: jest, label: 'Jest' },
  { image: angular, label: 'Angular' },
  { image: vue, label: 'Vue' },
  { image: node, label: 'Node' },
  { image: deno, label: 'Deno' },
  { image: capacitor, label: 'Capacitor' },
  { image: docker, label: 'Docker' },
  { image: intellij, label: 'Intellij' },
  { image: java, label: 'Java' },
  { image: kotlin, label: 'Kotlin' },
  { image: lit, label: 'Lit' },
  { image: nextjs, label: 'NextJS' },
  { image: storybook, label: 'Storybook' },
  { image: sass, label: 'Sass' },
]

export const Technologies: FC<{ technologies?: string[] }> = ({ technologies }) => {
  // Determine which technologies to render
  const renderedTechnologies =
    technologies?.map(technology => {
      // Attempt to find the matching technology
      const matchedTechnology = allTechnologies.find(t => t.label.toLowerCase() === technology.toLowerCase())
      // Return either the matched technology or a placeholder with just the label
      return matchedTechnology || { label: technology }
    }) || allTechnologies // Default to all technologies if none specified

  return (
    <div className="flex flex-wrap flex-row w-full gap-4">
      {renderedTechnologies.map(tech => (
        <div key={tech.label} className="flex flex-col items-center">
          {tech.image ? (
            // Wrap the image and label in a single span to avoid repetition
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
