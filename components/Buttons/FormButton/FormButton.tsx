interface FormButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

export const FormButton = ({ text, type = 'button', onClick}: FormButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
            {text}
        </button>
    )
}