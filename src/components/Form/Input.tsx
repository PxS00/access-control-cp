import type { FieldValues } from "react-hook-form";
import type { InputProps } from "../../types/inputProps";

export default function Input<T extends FieldValues = FieldValues>({
  id,
  name,
  label,
  type = "text",
  placeholder,
  register,
  error,
}: InputProps<T>) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <small>{error}</small>}
    </div>
  );
}
