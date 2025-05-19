'use client';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData, contactFormSchema } from './contact.schema';
import { toast } from './ui/use-toast';

export function ContactForm({
  open,
  onOpenChange,
  message,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message?: string;
}) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: message || '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast({
        title: 'Mensaje enviado',
      });

      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'No se pudo enviar el mensaje. Por favor intente nuevamente.',
        variant: 'destructive',
      });
    }
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
            <DrawerTitle>¿Cómo podemos ayudarte?</DrawerTitle>
            <DrawerDescription>
              ¿Tenes una consulta o queres trabajar con nosotros? Completa el
              formulario y nos pondremos en contacto a la brevedad.
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Nombre"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Empresa"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Correo electrónico"
                          type="email"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Escribinos tu mensaje"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pb-4">
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground"
                  >
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
