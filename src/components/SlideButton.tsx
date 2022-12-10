type SlideButtonProps = {
  icon: JSX.Element;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const SlideButton = ({ icon, handleClick }: SlideButtonProps) => {
  return (
    <button type="button" onClick={handleClick} className="btn-arrow">
      {icon}
    </button>
  );
};

export default SlideButton;
