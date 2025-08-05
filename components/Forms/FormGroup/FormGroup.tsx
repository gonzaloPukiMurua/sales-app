interface FormGroupProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

export const FormGroup = ({ label, htmlFor, children}: FormGroupProps) => {
    return (
        <div className="mb-4">
            <label htmlFor={htmlFor} className="block text-sm font-med">
                {label}
            </label>
            {children}
        </div>
    )
}