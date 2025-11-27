import FormLabel from "./FormLabel";

const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  placeholder?: string;
}) => (
  <div>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-2 w-full border border-gray-300 rounded-lg p-4 font-body text-gray-800 focus:outline-none focus:ring-4 focus:ring-accentGold/50 transition"
    />
  </div>
);

export default FormInput;
