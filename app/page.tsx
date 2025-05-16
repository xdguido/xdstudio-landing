'use client';

import { ContactForm } from '@/components/contact-form';
import LogoParticles from '@/components/logo-particles';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center min-h-screen bg-background text-foreground">
      {/* Grid container with max-width and consistent horizontal margins */}
      <div className="max-w-7xl border border-border mx-4">
        {/* Header */}
        <header className="grid grid-cols-12 gap-4 py-6 px-4 sm:px-6 lg:px-8">
          <div className="col-span-6 flex items-center">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight">XD.STUDIO</span>
            </div>
          </div>
          {/* <nav className="col-span-6 md:col-span-6 hidden md:flex items-center justify-end gap-8">
            <Link
              href="#contact"
              className="text-sm uppercase tracking-wide hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav> */}
        </header>

        <main>
          {/* Hero Section */}
          <section className="grid grid-cols-12 gap-4 pt-16 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="col-span-12 xl:col-span-7 flex flex-col items-center xl:items-end justify-center text-center xl:text-right">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                Que quieres <br />{' '}
                <span className="text-primary">construir</span> hoy?
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Llevamos el desarrollo de software a otro nivel. Creamos
                soluciones personalizadas que se adaptan a tus necesidades.
              </p>
              <Button
                size={'lg'}
                className="hover:bg-primary/90 text-zinc-950 font-medium rounded-sm bg-zinc-50/80 text-lg"
              >
                Comenzar <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
            <div className="hidden xl:block col-span-5 -mt-6">
              <LogoParticles />
            </div>
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="grid grid-cols-12 border-t border-b gap-4 py-24 px-4 sm:px-6 lg:px-8"
          >
            <div className="col-span-12 md:col-span-4 p-8 md:text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Nuestros Servicios
              </h2>
            </div>

            {/* Service 1 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className=" p-8 rounded-sm h-full">
                <h3 className="text-xl font-bold mb-2">Aplicaciones</h3>
                <p className="text-muted-foreground">
                  Soluciones de software a medida para optimizar tus procesos
                  operativos.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className=" p-8 rounded-sm h-full">
                <h3 className="text-xl font-bold mb-2">Sitios web</h3>
                <p className="text-muted-foreground">
                  Desarrollo de sitios web modernos y responsivos para tu
                  negocio.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-5">
              <div className=" p-8 rounded-sm h-full">
                <h3 className="text-xl font-bold mb-2">Automatización</h3>
                <p className="text-muted-foreground">
                  Automatiza tareas repetitivas y mejora la eficiencia de tu
                  equipo.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9">
              <div className=" p-8 rounded-sm h-full">
                <h3 className="text-xl font-bold mb-2">Herramientas</h3>
                <p className="text-muted-foreground">
                  Desarrolla herramientas personalizadas para mejorar la
                  productividad de tu equipo.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="grid grid-cols-12 gap-4 py-24 px-4 sm:px-6 lg:px-8"
          >
            <div className="col-span-12 lg:col-start-3 lg:col-span-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                Da un paso adelante con tu proyecto
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Colaboremos juntos para crear algo increíble. Estamos aquí para
                ayudarte a dar un paso adelante en tu proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size={'lg'}
                  className="bg-zinc-50/80 hover:bg-primary/90 text-zinc-950 rounded-sm text-lg"
                  onClick={() => setOpen(true)}
                >
                  Comenzar
                </Button>
                <Button
                  variant="outline"
                  size={'lg'}
                  className="border-border text-foreground hover:bg-secondary rounded-sm text-lg"
                  onClick={() => setOpen(true)}
                >
                  Agendar reunion
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="grid grid-cols-12 gap-4 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
          <div className="col-span-6 flex items-center">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight">XD.STUDIO</span>
            </div>
          </div>
          <div className="col-span-6 flex justify-end items-center">
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} XD.STUDIO. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
      <ContactForm open={open} onOpenChange={setOpen} />
    </div>
  );
}
