import { Navbar, Footer } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";
import styles from "./Layout.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();
  return (
    <div className={styles.root}>
      <Navbar />
      <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
        <CartSidebar />
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
