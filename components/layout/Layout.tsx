import { NextPage } from "next";
import type {ReactNode} from "react"
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode;
  }

const Layout:NextPage<LayoutProps> = ({children}) => {
  return (
    <div>
                  <header>
        <Header />
      </header>
      {children}
      <footer>
      <Footer />
    </footer>
        </div>
  )
}

export default Layout;