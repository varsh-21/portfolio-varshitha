import * as React from "react";
import Header from "./header";
import { StaticImage } from "gatsby-plugin-image"
import Footer from "./footer";
import { ThemeContext } from "../../context/themeProvider";

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = (props: Props) => {
  const { theme, themeName, toggleTheme } = React.useContext(ThemeContext);
  const { secondary, oppositeSecondary } = theme?.colors;
  const { children } = props;
  return (
    <div
      className="layout"
      id="wrapper"
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      <Header />
      <main>
        <section className="content">{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
