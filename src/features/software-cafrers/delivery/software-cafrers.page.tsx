import type { FC } from 'react'
import { Page } from '@/core/components/page/page'
import { Link } from '@/core/components/link/link'
import { Section } from '@/features/home/delivery/section'
import { AccentText } from '@/core/components/accent-text/accent-text'
import { Button } from '@/components/ui/button'

export const SoftwareCafrersPage: FC = () => {
  return (
    <Page>
      <div className="wrapper">
        <h1 className="text-4xl font-bold mb-2">
          <AccentText>Software Cafrers: Haciendo Código que haría Vomitar a una Cabra</AccentText>
        </h1>
      </div>

      <Section>
        <div className="wrapper">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-20 pt-4">
                <div className="relative aspect-[2/3] w-full bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold mb-2">Software Cafrers</h3>
                    <p className="text-sm">Haciendo Código que haría Vomitar a una Cabra</p>
                    <p className="mt-4 text-xs text-gray-500">Imagen de portada próximamente</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <p className="text-lg font-semibold">
                    Publicado por{' '}
                    <a href="https://savvily.es/" target="_blank" rel="noopener noreferrer" className="underline">
                      Savvily
                    </a>
                  </p>

                  <div className="flex flex-col gap-2">
                    <p className="text-amber-500 font-bold">¡Próximamente!</p>
                    <Button asChild>
                      <Link type="invisible" to="https://savvily.es/">
                        Comprar
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <Section title="Sinopsis" className="mt-0 md:mt-0">
                <div className="not-prose max-w-none">
                  <p>
                    Este libro ha llegado a tus manos por una razón muy concreta: el código que haces es… Pésimo.
                    Vergonzoso. Ofensivo. Y encima en JavaScript. Así que sí, este libro es para ti. Para que sigas
                    escribiendo código que solo &#34;funciona&#34; en tu local y nadie sabe por qué. Porque si nadie
                    entiende tu código... Eres indispensable.
                  </p>
                  <p>
                    Con este libro aprenderás a crear bugs indetectables, bucles anidados recursivos infinitos,
                    estructuras de código que son ilegales en 42 países, abstracciones que sólo entendería un lagarto y
                    funciones que devuelven ansiedad. En definitiva, reforzarás tu maestría en escribir código que haría
                    vomitar a una cabra para convertirte en un auténtico cafre del desarrollo: un Software Cafrer. Y sí,
                    es un buen regalo para esa persona que se dedica a &#34;eso&#34; de la informática y que no te cae
                    tan bien.
                  </p>
                </div>
              </Section>

              <Section title="Biografía">
                <div className="not-prose max-w-none">
                  <p>
                    César Alberca es arquitecto Frontend de software, basado en España y con más de 10 años de
                    experiencia. Ufff, qué serio queda esto… ¿mejor en primera persona? Que lo estoy escribiendo yo, al
                    fin y al cabo. Vale. Me interesa mucho las buenas prácticas, el testing y crear aplicaciones
                    Frontend que sobrevivan las semejantes bazofias de código que tú haces. Sí, tú, el que está leyendo
                    esto. Sabes perfectamente que llevas años haciendo código que haría tumbar a un ñu. ¿Cuándo piensas
                    parar?
                  </p>
                  <p>
                    Mientras tanto, yo sigo a lo mío, promoviendo el intrusismo laboral dando turras técnicas sobre
                    arquitectura en el Frontend —también llamadas arquitecturras™—, viajando por encima de mis
                    posibilidades como nómada digital, y acumulando hobbies con la esperanza de olvidar que,
                    efectivamente, aún me dedico a programar.
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
