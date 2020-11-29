const path = require("path")
const siteMetadata = require("./content/settings/siteMetadata.json")

module.exports = {
  siteMetadata: {
    ...siteMetadata,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-typescript`,
    `@chakra-ui/gatsby-plugin`,
    // `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        manualInit: true,
        modulePath: path.join(__dirname, `src`, `cms`, `index.ts`),
        // stylesPath: path.join(__dirname, `src`, `cms`, `admin.css`),
        // enableIdentityWidget: true, // Netlify identity
        publicPath: `_admin`,
        htmlTitle: `${siteMetadata.title} CMS Panel`,
        // htmlFavicon: `/icons/64x64.png`,
      },
    },
  ],
}
