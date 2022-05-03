interface IProps {
  children: React.ReactNode | React.ReactNode[];
  el?: React.ComponentType<React.HtmlHTMLAttributes<HTMLElement>>;
}

const Container:React.FC<IProps> = ({ children, el: Component = "div" }) => {
  return (
    <Component className="px-6 mx-auto max-w-8xl">
      {children}
    </Component>
  )
}

export default Container