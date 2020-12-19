import React from "react"
import Template from "./template"
import { DefaultLayout } from "../../../components"
import { graphql } from "gatsby"

interface QueryDataToAny {
  data: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data }) => {
  const { body } = data.mdx
  return (
    <DefaultLayout>
      <Template
        data={{
          ...data.mdx.frontmatter,
          body,
        }}
      />
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        levels {
          title
          icon
          color
          infos {
            key
            value
          }
        }
        metadata {
          title
          description
          dateModified
          datePublished
          image
        }
      }
    }
  }
`

export { pageQuery, Template }

export default PagesLayout
