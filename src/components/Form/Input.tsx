import type { FieldValues } from 'react-hook-form';
import type { InputProps } from '../../types/inputProps';

export default function Input<T extends FieldValues = FieldValues>({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  register,
  error,
}: InputProps<T>) {
  const inputId = id ?? String(name);          
  const errorId = `${inputId}-error`;

  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        aria-invalid={Boolean(error)}             
        aria-describedby={error ? errorId : undefined}
      />

      {error && (
        <small id={errorId} className="error" role="alert">
          {error}
        </small>
      )}
    </div>
  );
}
