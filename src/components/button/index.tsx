type Props = {
  label: string;
  type?: string;
  disabled?: boolean;
};

const Button = ({ label, type, disabled }: Props) => {
  let className = '';

  switch (type) {
    case 'edit':
      className =
        'bg-green-500 hover:bg-green-500 transition-all disabled:opacity-50 py-2 px-6 text-white rounded-md';
      break;

    case 'submit':
      className =
        'bg-green-500 hover:bg-green-500 transition-all disabled:opacity-50 py-2 px-6 text-white rounded-md';
      break;

    case 'delete':
      className = 'bg-red-500 py-2 px-6 rounded-md';
  }

  return (
    <button disabled={disabled} className={className}>
      {label}
    </button>
  );
};

export default Button;
