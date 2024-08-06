interface IButton {
  children: any;
  onClick?: (arg: any) => void;
  className?: string;
  active?: boolean;
}

const Button = ({ children, className, onClick }: IButton) => {
  return (
    <button
      className={`${
        className ? className : ""
      } font-prompt cursor-pointer lined-button lined-button-1 
        `}
      onClick={onClick}
    >
      <p className="text-xs-xl-l tracking-06em uppercase">{children}</p>
    </button>
  );
};
export default Button;
