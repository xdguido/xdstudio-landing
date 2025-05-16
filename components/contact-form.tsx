'use client';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="max-w-2xl w-full mx-auto">
          <DrawerHeader>
            <DrawerTitle>Contacto</DrawerTitle>
            <DrawerDescription>
              ¿Tenes una consulta o queres trabajar con nosotros? Completa el
              formulario y nos pondremos en contacto a la brevedad.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 space-y-4">
            <form className="space-y-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea
                placeholder="Tell us about your project"
                className="min-h-[120px]"
              />
            </form>
          </div>
          <DrawerFooter>
            <Button className="w-full bg-primary text-primary-foreground">
              Enviar Mensaje
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
