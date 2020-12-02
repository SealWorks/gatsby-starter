const path = require("path")
const siteMetadata = require("./content/settings/siteMetadata.json")
const googleFonts = require("./content/settings/googleFonts.json")

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    info: {},
    social: [],
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
        name: `mdx`,
        path: path.join(__dirname, `content`),
      },
    },

    `gatsby-plugin-typescript`,
    `@chakra-ui/gatsby-plugin`,

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              quality: 80,
              maxWidth: 1800,
              options: {
                quality: 95,
                maxWidth: 1800,
                sizeByPixelDensity: true,
                srcSetBreakpoints: [200, 420, 720, 900, 1200],
              },
              backgroundColor: "#999",
              withWebp: { quality: 80 },
              showCaptions: true,
              linkImagesToOriginal: false,
              defaultLayouts: {
                default: require.resolve("./src/templates/default.tsx"),
              },
            },
          },
        ],
      },
    },

    //Production Only
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: googleFonts.fonts
    //   },
    // },

    //CMS

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
