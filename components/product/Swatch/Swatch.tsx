import style from "./Swatch.module.css";

interface IProps {
  color?: string;
  label?: string;
}

const Swatch: React.FC<IProps> = ({ color, label }): JSX.Element => {
  label = label?.toLowerCase();
  return <button className={style.roots}>click</button>;
};

export default Swatch;
