import React from "react"
import Template from "./template"
import { DefaultLayout, NewsletterForm } from "../../../components"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/react"

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
      <Box pb={10} />
      <NewsletterForm />
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        slug
        cards {
          title
          text
          link
          icon
        }
        mission {
          bgImage
          text
        }
        vision {
          bgImage
          text
        }
        values {
          cards {
            title
            icon
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
