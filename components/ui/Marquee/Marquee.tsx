import { Ticker } from '@components/ui';
import style from "./Marquee.module.css";

interface IProps {
  children: Array<React.ReactNode>;
}

const Marquee: React.FC<IProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <Ticker height={40} offset={80} length={children.length}>
        <div className={style.container}>{children}</div>
      </Ticker>
    </div>
  );
};

export default Marquee;
