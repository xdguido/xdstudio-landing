import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string({
      required_error: 'El nombre es requerido',
    })
    .min(1, 'El nombre es requerido')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .transform((str) => str.trim()),
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .min(1, 'El email es requerido')
    .email('Email inválido')
    .transform((str) => str.trim()),
  company: z
    .string()
    .transform((str) => str.trim())
    .pipe(z.string().min(1).optional()),
  message: z
    .string({
      required_error: 'El mensaje es requerido',
    })
    .min(1, 'El mensaje es requerido')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede exceder los 500 caracteres')
    .transform((str) => str.trim()),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
