import React from "react"
import Template from "./template"
import { DefaultLayout } from "../../../components"
import { graphql } from "gatsby"

interface QueryDataToAny {
  data: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data }) => {
  return (
    <DefaultLayout>
      <Template
        data={{
          ...data.mdx.frontmatter,
        }}
      />
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        hero {
          title
          bgImage
          video
        }
        plans {
          label
          labelPrefix
          price
          infoList {
            key
            value
          }
          buttons {
            label
            colorScheme
            variant
            link
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
