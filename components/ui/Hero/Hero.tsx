import style from "./Hero.module.css";
import Link from "next/link";
import { Container } from "@components/ui";

interface IProps {
  headline: string;
  description: string;
}

const Hero: React.FC<IProps> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={style.root}>
          <h2 className={style.headline}>{headline}</h2>
          <div>
            <p className={style.description}>{description}</p>
            <Link href="/">
              <a className={style.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
