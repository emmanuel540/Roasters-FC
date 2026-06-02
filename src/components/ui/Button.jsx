export default function Button({ variant = 'primary', children, ...props }) {
  return (
    <button className={`button ${variant}`} {...props}>
      {children}
    </button>
  );
}
