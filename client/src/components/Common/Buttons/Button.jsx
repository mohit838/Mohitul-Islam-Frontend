const Button = ({ children, type }) => {
  return (
    <button
      className={`px-4 py-2 ${
        type === 'diff' ? 'actionBtnDiff' : 'actionBtnReg'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
