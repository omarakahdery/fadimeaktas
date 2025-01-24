type Props = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

export function Input({ label, type, name, value, onChange, required, placeholder, error }: Props) {
  return (
    <>
      <label className="form-label" htmlFor={name}>{label}</label>
      <input
        className="form-control form-control-lg rounded-pill"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-primary">{error}</p>
      )}
    </>
  )
}