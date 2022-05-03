
interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const Container:React.FC<IProps> = ({ children }) => {
  return (
    <div>Container</div>
  )
}

export default Container