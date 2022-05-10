import { Navbar, Footer } from '@components/common';
import styles from "./Layout.module.css";

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className={styles.root}>
    <Navbar />
    <main className="fit">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout;