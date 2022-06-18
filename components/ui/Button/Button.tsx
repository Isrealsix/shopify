import style from "./Button.module.css";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const Button: React.FC<IProps> = ({ children }) => {
  return (
    <button className={style.root} type="button">
      {children}
    </button>
  );
};

export default Button;
