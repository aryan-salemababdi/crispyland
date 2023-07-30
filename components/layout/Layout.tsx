import { NextPage } from "next";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer"

type LayoutProps = {
    children: ReactNode;
  };
  
const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
