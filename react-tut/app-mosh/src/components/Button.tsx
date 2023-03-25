interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning";
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`btn btn-${color} m-2`}>
      {children}
    </button>
  );
};

export default Button;
