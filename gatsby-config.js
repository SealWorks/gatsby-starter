const path = require("path")
const siteMetadata = require("./content/settings/siteMetadata.json")
const googleFonts = require("./content/settings/googleFonts.json")
const info = require("./content/settings/info.json")
const social = require("./content/settings/social.json")

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    info,
    social,
  },

  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, `static`),
        name: "uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms`,
        path: path.join(__dirname, `content`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cmsComponents`,
        path: path.join(__dirname, `content`, `components`),
      },
    },

    `gatsby-plugin-typescript`,
    `@chakra-ui/gatsby-plugin`,

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/templates/default.tsx"),
        },
      },
    },

    //Production Only
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: googleFonts.fonts.map(
            font => `${font.family}:${font.variants}`
          ),
        },
        timeout: 2000,
      },
    },

    //CMS

    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        manualInit: true,
        modulePath: path.join(__dirname, `src`, `cms`, `index.js`),
        // stylesPath: path.join(__dirname, `src`, `cms`, `admin.css`),
        // enableIdentityWidget: true, // Netlify identity
        publicPath: `_admin`,
        htmlTitle: `${siteMetadata.title} CMS Panel`,
        // htmlFavicon: `/icons/64x64.png`,
      },
    },
  ],
}
