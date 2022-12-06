interface ButtonProps {
  styles: 'btn-primary' | 'btn-secondary' | 'btn-arrow';
}

const Button = ({ styles }: ButtonProps) => {
  return (
    <button className={`btn ${styles}`} type="button">
      Free Consultation
    </button>
  );
};

export default Button;
