import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import style from "./Button.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
}

const Button: React.FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <button className={cn(style.root, className)} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
