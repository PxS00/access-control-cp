import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

/**
 * Props para o componente Input genérico compatível com React Hook Form
 * @template T - Tipo do schema de validação (extends FieldValues)
 */
export type InputProps<T extends FieldValues> = {
  /** ID único do input */
  id: string;
  /** Nome do campo no formulário (deve ser uma chave válida do schema) */
  name: Path<T>;
  /** Label exibido para o usuário */
  label: string;
  /** Tipo do input HTML (text, email, password, etc.) */
  type?: string;
  /** Texto de placeholder */
  placeholder?: string;
  /** Função register do React Hook Form */
  register: UseFormRegister<T>;
  /** Mensagem de erro de validação */
  error?: string;
};
