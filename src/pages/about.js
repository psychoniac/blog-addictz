import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="A propos">
      <p>Description du blog</p>
      <div>Formulaire de contact</div>
    </Layout>
  );
};

export const Head = () => <Seo title="A propos" />;

export default AboutPage;
