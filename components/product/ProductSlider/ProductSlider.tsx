import styles from "./ProductSlider.module.css";

interface IProps {
  children: React.ReactNode;
}
const ProductSlider: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className="h-full transition-opacity">{children}</div>
    </div>
  );
};

export default ProductSlider;
