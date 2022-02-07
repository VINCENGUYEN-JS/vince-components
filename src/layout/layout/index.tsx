import InternalLayout, { BasicProps, Content, Header, Footer } from "./layout";
import Sider from "./Sider";

interface LayoutComposition extends React.FC<BasicProps> {
  Content: typeof Content;
  Header: typeof Header;
  Footer: typeof Footer;
  Sider: typeof Sider;
}

const Layout = InternalLayout as LayoutComposition;

/**Assign props later */

Layout.Content = Content;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Sider = Sider;

export default Layout;
