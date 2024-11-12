import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <section>
        <h2>Présentation</h2>
        <StaticImage
          alt="photo du port de la rochelle"
          src="../images/photos/port_minimes_brumes.jpg"
        />
        <p>
          J'ai commencé a développer ce blog le week end du 9 novembre avec
          gatsby js. J'ai décider de suivre le tuto de la documentation de
          gatsby sans regardez des tutos comme je fais habituellement.
        </p>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
