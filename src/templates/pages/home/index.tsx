import React from "react"
import Template from "./template"
import { DefaultLayout, NewsletterForm } from "../../../components"
import { graphql } from "gatsby"

interface QueryDataToAny {
  data: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data }) => {
  const { body } = data.mdx
  const { hero, callToAction, description } = data.mdx.frontmatter
  return (
    <DefaultLayout>
      <Template
        data={{
          hero,
          callToAction,
          description: {
            body,
            ...description,
          },
        }}
      />
      <NewsletterForm />
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query HomePage($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        slug
        hero {
          title
          headline
          buttons {
            colorScheme
            variant
            label
            link
          }
          bgImage
        }
        callToAction {
          title
          cards {
            title
            icon
          }
          buttons {
            colorScheme
            variant
            label
          }
        }
        description {
          title
          cards {
            title
            text
            link
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
