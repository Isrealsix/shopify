import React, { Children, cloneElement, isValidElement } from "react";
import { useKeenSlider } from "keen-slider/react";
import cn from "classnames";
import styles from "./ProductSlider.module.css";

interface IProps {
  children: React.ReactNode;
}
const ProductSlider: React.FC<IProps> = ({ children }) => {
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      console.log("about to slide", s.options);
    },
  });

  /**
   * Function to slide
   *
   * @argument 'prev' || 'next'
   */
  const slide = (direction) => {
    switch (direction) {
      case "next":
        return slider.current.next();
      case "prev":
        return slider.current.prev();
      default:
        console.error("something went wrong with slider");
    }
  };

  return (
    <div className={styles.root}>
      <div ref={sliderRef} className="keen-slider h-full transition-opacity">
        <button
          onClick={slide.bind(this, "prev")}
          className={cn(styles.leftControl, styles.control)}
        />
        <button
          onClick={slide.bind(this, "next")}
          className={cn(styles.rightControl, styles.control)}
        />
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
