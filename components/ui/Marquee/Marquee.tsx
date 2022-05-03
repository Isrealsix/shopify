import style from "./Marquee.module.css";

interface IProps {
  children: Array<React.ReactNode>;
}

const Marquee: React.FC<IProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <div className={style.container}>{children}</div>
    </div>
  );
};

export default Marquee;
