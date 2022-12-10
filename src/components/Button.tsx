type ButtonProps = {
  styles: 'btn-primary' | 'btn-secondary' | 'btn-arrow';
};

const Button = ({ styles }: ButtonProps) => {
  return (
    <button type="button" className={`btn ${styles}`}>
      Free Consultation
    </button>
  );
};

export default Button;
