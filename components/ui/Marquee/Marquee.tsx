import { Ticker } from '@components/ui';
import style from "./Marquee.module.css";
import cn from 'classnames';

interface IProps {
  variant?: 'primary' | 'secondary';
  children: Array<React.ReactNode>;
}

const Marquee: React.FC<IProps> = ({ children, variant = 'primary' }) => {
  const rootClassName = cn(
    style.root,
    {
      [style.secondary]: variant === 'secondary'
    }
  )
  return (
    <div className={rootClassName}>
      <Ticker height={40} offset={80} length={children.length}>
        <div className={style.container}>{children}</div>
      </Ticker>
    </div>
  );
};

export default Marquee;
