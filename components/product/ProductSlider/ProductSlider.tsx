import { Children, cloneElement, isValidElement } from "react";
import styles from "./ProductSlider.module.css";

interface IProps {
  children: React.ReactNode;
}
const ProductSlider: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className="keen-slider h-full transition-opacity">
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, { className: "keen-slider__slide" });
          }
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
