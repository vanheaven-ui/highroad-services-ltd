const FormLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) => (
  <label
    htmlFor={htmlFor}
    className="block text-primary font-semibold text-sm uppercase tracking-wider mb-1"
  >
    {children}
  </label>
);

export default FormLabel;
