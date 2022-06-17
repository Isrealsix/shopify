import { Children, cloneElement, isValidElement } from "react";
import styles from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";

interface IProps {
  children: React.ReactNode;
}
const ProductSlider: React.FC<IProps> = ({ children }) => {
  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      console.log("about to slide", s);
    },
  });

  return (
    <div className={styles.root}>
      <div
        ref={sliderRef as any}
        className="keen-slider h-full transition-opacity"
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              className: `${
                child.props.className ? `${child.props.className}` : ""
              } keen-slider__slide`,
            });
          }
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
