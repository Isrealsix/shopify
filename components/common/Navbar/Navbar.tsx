import Link from "next/link";
import { Container } from "@components/ui";
import { Usernav } from '@components/common';
import style from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className={style.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={style.logo}>Eazy Store</a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={style.link}>All</a>
            </Link>
            <Link href="/">
              <a className={style.link}>Clothes</a>
            </Link>
            <Link href="/">
              <a className={style.link}>Shoes</a>
            </Link>
            <Link href="/">
              <a className={style.link}>Electronics</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
        {/* <h1>Eazy Store</h1> */}
      </div>
    </Container>
  );
};

export default Navbar;
