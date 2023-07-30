import { NextPage } from "next";
import type { ReactNode } from "react";
import {Container} from "@mui/material";
import Header from "./Header";
import Footer from "./footer"

type LayoutProps = {
    children: ReactNode;
  };
  
const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
        <Container>{children}</Container>
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
