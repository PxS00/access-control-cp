import type { InputProps } from "../../types/inputProps";

export default function Input({
  id,
  name,
  label,
  type = "text",
  placeholder,
  register,
  error,
}: InputProps) {
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