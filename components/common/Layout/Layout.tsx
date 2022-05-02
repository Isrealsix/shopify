import styles from "./Layout.module.css";

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className={styles.root}>
    <main className="fit">
      {children}
    </main>
  </div>
)

export default Layout;