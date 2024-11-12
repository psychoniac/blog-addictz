/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Blog addictz`,
    description: `Un blog créer par un addict pour les addicts qui se posent des questions.`,
    twitterUsername: `@psychoniac`,
    image: `./src/images/avatar.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    // gère le traitement de l'image utilisé par plugin-image
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `src/blog/`,
      },
    },
  ],
};
