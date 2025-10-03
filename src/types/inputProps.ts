import type { UseFormRegister } from "react-hook-form";

export interface IUserFormValues {
  nome?: string;
  nomeUsuario: string;
  email: string;
}

export type InputProps = {
  id: string;
  name: keyof IUserFormValues;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<IUserFormValues>;
  error?: string;
};