import { z } from "zod";

export const cadastroSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  nomeUsuario: z
    .string()
    .min(3, "O nome de usuário deve ter pelo menos 3 caracteres."),
  email: z.email("E-mail inválido."),
});

export const loginSchema = z.object({
  nomeUsuario: z
    .string()
    .min(3, "O nome de usuário deve ter pelo menos 3 caracteres."),
  email: z.email("E-mail inválido."),
});

export type CadastroSchema = z.infer<typeof cadastroSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
