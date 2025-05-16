'use client';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Form, FormField } from './ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export function ContactForm({
  open,
  onOpenChange,
  message,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message?: string;
}) {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: message || '',
    },
  });

  const onSubmit = (data: any) => {
    // Handle form submission
    console.log('Form submitted:', data);
    // Reset the form or close the drawer
    form.reset();
    onOpenChange(false);
  };

  useEffect(() => {
    if (message) {
      form.setValue('message', message);
    }
  }, [message, form]);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="max-w-2xl w-full mx-auto">
          <DrawerHeader>
            <DrawerTitle>Escribinos</DrawerTitle>
            <DrawerDescription>
              ¿Tenes una consulta o queres trabajar con nosotros? Completa el
              formulario y nos pondremos en contacto a la brevedad.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 space-y-4">
            <Form {...form}>
              <form onSubmit={onSubmit} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <Input placeholder="Nombre" {...field} className="w-full" />
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <Input
                      placeholder="Correo electrónico"
                      type="email"
                      {...field}
                      className="w-full"
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <Textarea
                      placeholder="¿Cómo podemos ayudarte?"
                      className="min-h-[120px]"
                      {...field}
                    />
                  )}
                />
              </form>
            </Form>
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
