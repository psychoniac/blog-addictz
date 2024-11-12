import * as React from "react";
import { contenerPage, contener, title } from "./layout.module.css";
import Header from "./header";
import Navbar from "./navbar";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={contenerPage}>
      <Header />
      <Navbar />
      <main className={contener}>
        <h2 className={title}>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );
};

export default Layout;
