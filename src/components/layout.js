import * as React from "react";
import { contener, title } from "./layout.module.css";
import Navbar from "./navbar";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Navbar />
      <main className={contener}>
        <h1 className={title}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
