import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { headerContener } from "./header.module.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={headerContener}>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  );
};
export default Header;
