import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { contenerPosts, cardPost } from "./blogPost.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Mes posts">
      <h2>Mes derniers posts</h2>
      <div className={contenerPosts}>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id} className={cardPost}>
            <h3>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <p>Posted: {node.frontmatter.date}</p>
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
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo title="Mes posts" />;

export default BlogPage;
