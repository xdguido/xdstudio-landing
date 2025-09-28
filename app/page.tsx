'use client';

import { ArrowRight, CopyrightIcon, PinIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/contact-form';
import { ContactMarquee } from '@/components/message-marquee';
import Image from 'next/image';
import Link from 'next/link';
import LogoParticles from '@/components/logo-particles';
import { sendGTMEvent } from '@next/third-parties/google';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      <div className="flex justify-center min-h-screen bg-background text-foreground">
        {/* Grid container with max-width and consistent horizontal margins */}
        <div className="max-w-7xl border border-border mx-4">
          {/* Header */}
          <header
            className="grid grid-cols-12 gap-4 py-6 px-4 sm:px-6 lg:px-8"
            role="banner"
          >
            <div className="col-span-6 flex items-center">
              <div className="flex items-center gap-2">
                <h1 className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="XD.STUDIO"
                    width={32}
                    height={32}
                    className="h-12 w-12 mr-2"
                  />
                  <span className="font-bold tracking-tight text-xl">
                    XD.STUDIO
                  </span>
                </h1>
              </div>
            </div>
          </header>

          <main role="main">
            {/* Hero Section */}
            <section
              className="grid grid-cols-12 gap-4 pt-16 pb-24 px-4 sm:px-6 lg:px-8"
              aria-labelledby="hero-heading"
            >
              <div className="col-span-12 xl:col-span-7 flex flex-col items-center xl:items-start justify-center text-center xl:text-left">
                <h2
                  id="hero-heading"
                  className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
                >
                  ¿Qué querés <br />{' '}
                  <span className="text-primary">construir</span> hoy?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Creamos soluciones personalizadas que se adaptan a tus
                  necesidades.
                </p>
                <Button
                  asChild
                  size={'lg'}
                  className="hover:bg-primary/90 transition-colors duration-200 ease-in-out hover:text-primary-foreground text-zinc-950 font-medium rounded-sm bg-zinc-50/80 text-lg"
                  aria-label="Comenzar proyecto de desarrollo de software"
                >
                  <Link
                    className="flex items-center"
                    href="#contact"
                    onClick={() => {
                      sendGTMEvent({
                        event: 'contact_cta_click',
                        location: 'hero',
                        label: 'Comenzar',
                      });
                    }}
                  >
                    Comenzar{' '}
                    <ArrowRight className="ml-1 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div
                className="hidden xl:block col-span-5 -mt-6"
                aria-hidden="true"
              >
                <LogoParticles />
              </div>
            </section>

            {/* Services Section */}
            <section
              id="services"
              className="grid grid-cols-12 border-t border-b gap-4 py-24 px-4 sm:px-6 lg:px-8"
              aria-labelledby="services-heading"
            >
              <div className="col-span-12 lg:col-span-4 p-8 md:text-center">
                <h2
                  id="services-heading"
                  className="text-3xl md:text-4xl font-bold tracking-tighter"
                >
                  Nuestros Servicios
                </h2>
              </div>

              {/* Service 1 */}
              <article className="col-span-12 lg:col-span-4">
                <div className="p-8 rounded-sm h-full">
                  <h3 className="text-xl font-bold mb-2">
                    Desarrollo de Aplicaciones
                  </h3>
                  <p className="text-muted-foreground">
                    Soluciones de software a medida para optimizar tus procesos
                    operativos y mejorar la eficiencia de tu equipo.
                  </p>
                </div>
              </article>

              {/* Service 2 */}
              <article className="col-span-12 lg:col-span-4">
                <div className="p-8 rounded-sm h-full">
                  <h3 className="text-xl font-bold mb-2">
                    Sitios Web Modernos
                  </h3>
                  <p className="text-muted-foreground">
                    Desarrollo de sitios web responsivos y optimizados para
                    atraer más clientes a tu negocio local.
                  </p>
                </div>
              </article>

              {/* Service 3 */}
              <article className="col-span-12 lg:col-span-4 lg:col-start-5">
                <div className="p-8 rounded-sm h-full">
                  <h3 className="text-xl font-bold mb-2">
                    Automatización de Procesos
                  </h3>
                  <p className="text-muted-foreground">
                    Automatiza tareas repetitivas y mejora la atención al
                    cliente con soluciones inteligentes.
                  </p>
                </div>
              </article>

              {/* Service 4 */}
              <article className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9">
                <div className="p-8 rounded-sm h-full">
                  <h3 className="text-xl font-bold mb-2">
                    Herramientas Internas
                  </h3>
                  <p className="text-muted-foreground">
                    Desarrollamos herramientas personalizadas para mejorar la
                    productividad y eficiencia de tu equipo de trabajo.
                  </p>
                </div>
              </article>
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="grid grid-cols-12 gap-4 py-24 px-4 sm:px-6 lg:px-8"
              aria-labelledby="contact-heading"
            >
              <div className="col-span-12 lg:col-start-3 lg:col-span-8 text-center">
                <h2
                  id="contact-heading"
                  className="text-3xl md:text-5xl font-bold tracking-tighter mb-6"
                >
                  Da un paso adelante con tu proyecto
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Estamos aquí para resolver tus desafíos tecnológicos y
                  ayudarte a alcanzar tus objetivos empresariales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size={'lg'}
                    className="bg-zinc-50/80 transition-colors duration-200 ease-in-out hover:bg-primary/90 hover:text-primary-foreground text-zinc-950 rounded-sm text-lg"
                    onClick={() => {
                      sendGTMEvent({
                        event: 'contact_cta_click',
                        location: 'contact_section',
                        label: 'Comenzar',
                      });
                      setOpen(true);
                    }}
                    aria-label="Iniciar conversación sobre tu proyecto"
                  >
                    Comenzar
                  </Button>
                  <Button
                    variant="outline"
                    size={'lg'}
                    className="border-border text-foreground hover:bg-secondary rounded-sm text-lg"
                    onClick={() => {
                      sendGTMEvent({
                        event: 'contact_cta_click',
                        location: 'contact_section',
                        label: 'Agendar reunión',
                      });
                      setOpen(true);
                    }}
                    aria-label="Programar reunión de consulta"
                  >
                    Agendar reunión
                  </Button>
                </div>
              </div>
              <div className="w-full mt-12 col-span-12">
                <ContactMarquee
                  onMessageSelect={(message) => {
                    sendGTMEvent({ event: 'contact_message_select', message });
                    setMessage(message);
                    setOpen(true);
                  }}
                />
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer
            className="grid grid-cols-12 gap-4 border-t border-border py-12 px-4 sm:px-6 lg:px-8"
            role="contentinfo"
          >
            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-wrap items-center">
                <div className="flex items-center mr-4">
                  <Image
                    src="/logo.png"
                    alt="XD.STUDIO"
                    width={32}
                    height={32}
                    className="h-12 w-12 mr-2"
                  />
                  <span className="font-bold tracking-tight text-xl">
                    XD.STUDIO
                  </span>
                </div>
                <span className="text-muted-foreground text-sm">
                  Desarrollo de Software a Medida
                </span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-start mt-4 lg:justify-end lg:items-end">
              <div className="flex items-center text-muted-foreground text-sm">
                <CopyrightIcon className="mr-2 shrink-0 h-4 w-4" />
                {new Date().getFullYear()} XD.STUDIO. Todos los derechos
                reservados.
              </div>
              <div className="flex items-center shrink-0 text-muted-foreground text-sm">
                <PinIcon className="mr-2 h-4 w-4" />
                Neuquén Capital, Argentina
              </div>
            </div>
          </footer>
        </div>
        <ContactForm open={open} onOpenChange={setOpen} message={message} />
      </div>
    </>
  );
}
