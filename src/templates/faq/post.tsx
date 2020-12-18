import React from "react"
import PostTemplate from "./PostTemplate"
import { Container, DefaultLayout, FaqForm, Link } from "../../components"
import { graphql, navigate } from "gatsby"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"
import FaqCategoryCards from "./FaqCategryCards"
import { FiArrowLeft } from "react-icons/fi"

interface QueryDataToAny {
  data: any
  pageContext: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data, pageContext }) => {
  const categoryFound = pageContext.categories.data.allMdx.edges.find(
    edge => edge.node.frontmatter.slug === "/a-verbasa"
  )

  const category = { ...categoryFound.node.frontmatter }

  const templateData = {
    post: {
      ...data.mdx.frontmatter,
      body: data.mdx.body,
      category,
    },
  }
  return (
    <DefaultLayout>
      <Container>
        <Flex
          w={{ base: "100%", lg: "61.8%" }}
          mx="auto"
          direction="column"
          py={10}
        >
          <Breadcrumb
            spacing="8px"
            separator={<FaChevronRight color="gray.500" size={10} />}
            pb={10}
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/faq">
                Dúvidas
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="brand.500">
              <BreadcrumbLink as={Link} href={`/faq/category${category.slug}`}>
                {category.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <PostTemplate data={templateData} />
          <Button
            display="flex"
            colorScheme="brand"
            variant="outline"
            w={32}
            mt={8}
            onClick={() => navigate(-1)}
          >
            <Icon as={FiArrowLeft} mr={4} />
            Voltar
          </Button>
        </Flex>
      </Container>
      <Box bg="aux.50">
        <FaqCategoryCards />
      </Box>
      <FaqForm />
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
        categories
        metadata {
          title
          description
          dateModified
          datePublished
          relativeDateModified: dateModified(fromNow: true, locale: "pt")
          originalDatePublished: datePublished(
            formatString: "dddd, DD [de] MMMM, YYYY"
            locale: "pt"
          )
          image
        }
      }
    }
  }
`

export { pageQuery, PostTemplate }

export default PagesLayout
