import React from "react"
import DefaultLayout from "../../components/layouts/DefaultLayout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import components from "../../components/mdx"
import { graphql } from "gatsby"

interface QueryDataToAny {
  data?: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data }) => {
  const { body } = data.mdx
  // const { title, slug } = data.mdx.frontmatter
  return (
    <DefaultLayout>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </DefaultLayout>
  )
}

export default PagesLayout

export const pageQuery = graphql`
  query HomeTemplate($id: String) {
    site {
      siteMetadata {
        siteUrl
        logo
        slogan
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        slug
      }
    }
  }
`

