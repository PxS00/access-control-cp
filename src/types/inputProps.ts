import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type InputProps<T extends FieldValues = FieldValues> = {
  id: string;
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
};
