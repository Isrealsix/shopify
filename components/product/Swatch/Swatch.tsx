import style from "./Swatch.module.css";
import { Check } from "@components/icons";

interface IProps {
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
}

const Swatch: React.FC<IProps> = ({ color, label, variant }): JSX.Element => {
  label = label?.toLowerCase();
  variant = variant?.toLowerCase();

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={style.root}
    >
      {/* <span>
        <Check />
      </span> */}
      {variant === "size" ? label : null}
    </button>
  );
};

export default Swatch;
