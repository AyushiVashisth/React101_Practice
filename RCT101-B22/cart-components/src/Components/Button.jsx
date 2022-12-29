const Button = ({ btnText, onClick }) => {
  return (
    <button
      style={{
        padding: "8px",
        color: "white",
        background: "black",
        border: "none"
      }}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
