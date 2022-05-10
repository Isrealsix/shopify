import React from "react";

interface IProps {
  height?: number;
  offset: number;
  length: number;
  children: React.ReactNode;
}

// -10%
// 
const Ticker: React.FC<IProps> = ({ height = 100, offset, length, children }) => {
  console.log(length, 'children passed in');
  return (
    <div style={{
      // height: `${height}%`,
      overflow: 'hidden',
      transform: `translateX(calc(0% + 4rem))`
    }}>{children}</div>
  )
}

export default Ticker