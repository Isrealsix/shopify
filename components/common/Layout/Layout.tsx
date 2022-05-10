import { Navbar, Footer } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';
import styles from "./Layout.module.css";

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className={styles.root}>
    <Navbar />
    <Sidebar>
      <CartSidebar />
    </Sidebar>
    <main className="fit">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout;