interface SlideButtonProps {
  icon: React.ReactNode;
  handleClick: () => void;
}

const SlideButton = ({ icon, handleClick }: SlideButtonProps) => {
  return (
    <button type="button" onClick={handleClick} className="btn-arrow">
      {icon}
    </button>
  );
};

export default SlideButton;
