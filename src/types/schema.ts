import { z } from 'zod';

export const cadastroSchema = z.object({
  nome: z
    .string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres.')
    .max(100, 'O nome deve ter no máximo 100 caracteres.')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras.'),
  nomeUsuario: z
    .string()
    .min(3, 'O nome de usuário deve ter pelo menos 3 caracteres.')
    .max(20, 'O nome de usuário deve ter no máximo 20 caracteres.')
    .regex(/^[a-zA-Z0-9_]+$/, 'Apenas letras, números e underscore.')
    .toLowerCase(),
  email: z.email('E-mail inválido.').trim().toLowerCase(),
});

export const loginSchema = z.object({
  nomeUsuario: z
    .string()
    .min(3, 'O nome de usuário deve ter pelo menos 3 caracteres.')
    .toLowerCase(),
  email: z.email('E-mail inválido.').trim().toLowerCase(),
});

export type CadastroSchema = z.infer<typeof cadastroSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
