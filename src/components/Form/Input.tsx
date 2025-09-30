interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

export default function Input({ 
  id,
  label, 
  type = "text", 
  placeholder, 
  error
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}
        type={type}
        placeholder={placeholder}
      />
      {error && <span>{error}</span>}
    </div>
  );
}