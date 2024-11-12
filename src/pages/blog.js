import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Mes posts">
      <h2>Mes derniers posts</h2>
      <div>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h3>{node.frontmatter.title}</h3>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo title="Mes posts" />;

export default BlogPage;
