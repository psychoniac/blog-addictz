import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="A propos">
      <p>Description du blog</p>
      <div>Formulaire de contact</div>
    </Layout>
  );
};

export const Head = () => <title>A propos</title>;

export default AboutPage;
