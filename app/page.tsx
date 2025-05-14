'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ContactForm } from '@/components/contact-form';
import { Code, Compass, Cpu, Layers, Lightbulb, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoParticles from '@/components/logo-particles';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Grid container with max-width and consistent horizontal margins */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="grid grid-cols-12 gap-4 py-6">
          <div className="col-span-6 md:col-span-6 flex items-center">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight">XD.STUDIO</span>
            </div>
          </div>
          <nav className="col-span-6 md:col-span-6 hidden md:flex items-center justify-end gap-8">
            <Link
              href="#services"
              className="text-sm uppercase tracking-wide hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-sm uppercase tracking-wide hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="grid grid-cols-12 gap-4 pt-16 pb-24">
            <div className="col-span-6 flex flex-col items-end justify-center text-right">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                We build <span className="text-primary">exceptional</span>{' '}
                software
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                A software development studio focused on creating clean,
                functional, and user-centered digital experiences.
              </p>
              <Button className="bg-inherit hover:bg-primary/90 rounded-sm px-8 border-border border py-6 text-lg">
                Get in touch
              </Button>
            </div>
            <div className="col-span-6 -mt-20">
              <LogoParticles />
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="grid grid-cols-12 gap-4 py-24">
            <div className="col-span-4 pt-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Our Services
              </h2>
            </div>

            {/* Service 1 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className=" p-8 rounded-sm border border-border h-full">
                <h3 className="text-xl font-bold mb-2">Software Development</h3>
                <p className="text-muted-foreground">
                  Custom software solutions tailored to your business needs.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className=" p-8 rounded-sm border border-border h-full">
                <h3 className="text-xl font-bold mb-2">Web Applications</h3>
                <p className="text-muted-foreground">
                  Responsive and performant web applications built with modern
                  technologies.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-5">
              <div className=" p-8 rounded-sm border border-border h-full">
                <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
                <p className="text-muted-foreground">
                  User-centered design that enhances usability and engagement.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9">
              <div className=" p-8 rounded-sm border border-border h-full">
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <p className="text-muted-foreground">
                  Native and cross-platform mobile applications for iOS and
                  Android.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="grid grid-cols-12 gap-4 py-24">
            <div className="col-span-12 lg:col-start-3 lg:col-span-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                Ready to build something amazing?
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Let's collaborate to bring your vision to life. Our team of
                experts is ready to help you create exceptional digital
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm px-8 py-6 text-lg"
                  onClick={() => setOpen(true)}
                >
                  Start a project
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary rounded-sm px-8 py-6 text-lg"
                  onClick={() => setOpen(true)}
                >
                  Schedule a call
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="grid grid-cols-12 gap-4 border-t border-border py-12">
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
