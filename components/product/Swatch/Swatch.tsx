import "./Swatch.module.css";

interface IProps {
  color?: string;
  label?: string;
}

const Swatch: React.FC<IProps> = ({ color, label }) => {
  label = label?.toLowerCase();
  return (
    <>
      {color && <>Color: {color}</>}
      Label: {label} {` , `}
    </>
  );
};

export default Swatch;
