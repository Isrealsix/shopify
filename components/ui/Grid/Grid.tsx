import React from 'react';
import style from "./Grid.module.css";

const Grid: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className={style.root}>
      {children}
    </div>
  )
}

export default Grid