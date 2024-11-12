import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <br />
        Try creating a page in <code>src/pages/</code>.
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="404" />;
