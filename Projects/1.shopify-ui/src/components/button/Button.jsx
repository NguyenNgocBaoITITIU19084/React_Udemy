const Button = ({ children, className, ...props }) => {
  let baseCss =
    'bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-full text-white transition-all duration-300';

  return (
    <button
      {...props}
      className={className ? className + ' ' + baseCss : baseCss}
    >
      {children}
    </button>
  );
};

export default Button;
