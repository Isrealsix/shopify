import React from 'react';
import style from "./Grid.module.css";
import cn from 'classnames';

interface IProps {
  children: React.ReactNode[];
  layout?: 'A' | 'B';
}

const Grid: React.FC<IProps> = ({children, layout = 'A'}) => {
  const rootClassName = cn(style.root, {
    [style.layoutA]: layout === "A",
    [style.layoutB]: layout === "B"
  })

  return (
    <div className={rootClassName}>
      {children}
    </div>
  )
}

export default Grid