'use client';

import { Marquee, MarqueeItem } from './marquee';

import { Button } from './ui/button';

const contactMessages = [
  {
    id: 1,
    text: 'Necesito una aplicación web',
    message: 'Me gustaría desarrollar una aplicación web para mi negocio.',
  },
  {
    id: 2,
    text: 'Quiero automatizar procesos',
    message: 'Busco automatizar procesos en mi empresa.',
  },
  {
    id: 3,
    text: 'Necesito un sitio web',
    message: 'Me interesa crear un sitio web profesional.',
  },
  {
    id: 4,
    text: 'Tengo una idea para un proyecto',
    message: 'Tengo una idea innovadora y necesito ayuda para desarrollarla.',
  },
];

const contactMessages2 = [
  {
    id: 1,
    text: 'Quiero mejorar mi atención al cliente',
    message: 'Busco mejorar la atención al cliente en mi negocio.',
  },
  {
    id: 2,
    text: 'Necesito una herramienta personalizada',
    message: 'Busco una herramienta personalizada para mi equipo.',
  },
  {
    id: 3,
    text: 'Quiero optimizar mis procesos',
    message: 'Busco optimizar los procesos de mi empresa.',
  },
  {
    id: 4,
    text: 'Tengo una consulta',
    message: 'Tengo una consulta sobre desarrollo de software.',
  },
];

interface ContactMarqueeProps {
  onMessageSelect: (message: string) => void;
}

export function ContactMarquee({ onMessageSelect }: ContactMarqueeProps) {
  return (
    <>
      <Marquee className="py-4" pauseOnHover={false}>
        {contactMessages.map((item) => (
          <MarqueeItem key={item.id} className="mx-4">
            <Button
              variant="outline"
              className="rounded-full hover:text-primary hover:bg-primary/20 border-border hover:border-primary/40"
              onClick={() => onMessageSelect(item.message)}
            >
              {item.text}
            </Button>
          </MarqueeItem>
        ))}
      </Marquee>
      <Marquee className="py-4" direction="right" pauseOnHover={false}>
        {contactMessages2.map((item) => (
          <MarqueeItem key={item.id} className="mx-4">
            <Button
              variant="outline"
              className="rounded-full hover:text-primary hover:bg-primary/20 border-border hover:border-primary/40"
              onClick={() => onMessageSelect(item.message)}
            >
              {item.text}
            </Button>
          </MarqueeItem>
        ))}
      </Marquee>
    </>
  );
}
