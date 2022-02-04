import InternalLayout, { BasicProps, Content, Header, Footer } from "./layout";

interface LayoutComposition extends React.FC<BasicProps> {
  Content: typeof Content;
  Header: typeof Header;
  Footer: typeof Footer;
}

const Layout = InternalLayout as LayoutComposition;
Layout.Content = Content;
Layout.Header = Header;
Layout.Footer = Footer;

export default Layout;
