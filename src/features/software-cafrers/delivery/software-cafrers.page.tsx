import type { FC } from 'react'
import { Page } from '@/core/components/page/page'
import { Link } from '@/core/components/link/link'
import { Section } from '@/core/components/section/section'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const SoftwareCafrersPage: FC = () => {
  return (
    <Page>
      <div className="wrapper">
        <h1 className="text-4xl font-bold mb-2">
          <AccentText>Software Cafrers: Haciendo Código que haría Vomitar a una Cabra</AccentText>
        </h1>
      </div>

      <Section>
        <div className="bleed-width-section">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-20 pt-4">
                <div className="relative w-full  rounded-lg shadow-lg flex items-center justify-center">
                  <Image src={'/assets/images/books/cover.png'} width={720} height={1080} alt="" />
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <p className="text-lg font-semibold">
                    Publicado por{' '}
                    <a href="https://savvily.es/" target="_blank" rel="noopener noreferrer" className="underline">
                      Savvily
                    </a>
                  </p>

                  <div className="flex flex-col gap-2">
                    <Button asChild>
                      <Link type="invisible" href={'https://tienda.savvily.es/products/software-cafrers'}>
                        Comprar
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <Section className="mt-0 md:mt-0">
                <h2 className={cn('my-6')}>
                  <AccentText>Sinopsis</AccentText>
                </h2>
                <div className="not-prose max-w-none">
                  <p>
                    Este libro ha llegado a ti por una razón muy concreta: el código que haces es… <em>Pésimo</em>.
                    <em>Vergonzoso</em>.<em>Ofensivo</em>. <strong>Y encima en JavaScript</strong>. Así que sí, este
                    libro es para ti. Para que sigas escribiendo código que solo <em>«funciona»</em> en tu local y nadie
                    sabe por qué. <strong>Porque si nadie entiende tu código… Eres indispensable</strong>.
                  </p>
                  <p>
                    Con este libro aprenderás a crear{' '}
                    <strong>
                      <em>bugs</em> indetectables
                    </strong>
                    , <strong>bucles anidados recursivos infinitos</strong>, estructuras de código que son{' '}
                    <strong>ilegales en 42 países</strong>, abstracciones que sólo{' '}
                    <strong>entendería un lagarto</strong> y funciones que devuelven ansiedad.
                  </p>
                  <p>
                    En definitiva, reforzarás tu maestría en{' '}
                    <strong>escribir código que haría vomitar a una cabra</strong> para convertirte en un auténtico
                    cafre del desarrollo: un <strong>«Software Cafrer»</strong>. Y sí, es un buen regalo para esa
                    persona que se dedica a <em>«eso»</em> de la informática y que no te cae <em>tan</em> bien.
                  </p>
                </div>
              </Section>

              <Section>
                <h2 className={cn('my-6')}>
                  <AccentText>Biografía</AccentText>
                </h2>
                <div className="not-prose max-w-none">
                  <p>
                    <strong>César Alberca</strong> es <strong>Arquitecto Frontend</strong> de <strong>Software</strong>,
                    basado en España, con más de <strong>10 años de experiencia</strong>. Ufff, qué serio queda esto…
                    <em>¿mejor en primera persona?</em> Que lo estoy escribiendo yo, al fin y al cabo. Vale. Me interesa
                    mucho la <strong>arquitectura</strong>, las <strong>buenas prácticas</strong>, el{' '}
                    <strong>testing</strong> y crear aplicaciones <em>Frontend</em> que{' '}
                    <strong>sobrevivan a las semejantes bazofias de código que haces</strong>. Sí, <em>tú</em>, el que
                    está leyendo esto. Sabes <em>perfectamente</em> que llevas años haciendo código que haría tumbar a
                    un ñu. ¿Cuándo piensas parar?
                  </p>
                  <p>
                    Mientras tanto, yo sigo a lo mío, promoviendo el intrusismo laboral dando turras técnicas sobre
                    arquitectura en el <em>Frontend</em> —también llamadas <strong>arquitecturras™</strong>—, viajando
                    por encima de mis posibilidades como <strong>nómada digital</strong>, y acumulando hobbies con la
                    esperanza de olvidar que, <em>efectivamente</em>, <strong>aún me dedico a programar</strong>.
                  </p>
                  <p>
                    Ojalá ahora apareciera una modal en este libro anunciando mi web. Como no es el caso, te la dejo
                    aquí: https://cesalberca.com/
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </Section>
    </Page>
  )
}
