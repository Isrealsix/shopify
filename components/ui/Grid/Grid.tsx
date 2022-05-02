import React from 'react';
import style from "./Grid.module.css";

const Grid: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="root-grid">
      {children}
    </div>
  )
}

export default Grid