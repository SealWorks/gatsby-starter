import React from "react"
import PostTemplate from "./PostTemplate"
import { Container, DefaultLayout, Link, SVGIcon } from "../../components"
import { graphql } from "gatsby"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"

const MarketBox: React.FC = () => (
  <Container>
    <Box rounded="xl" bg="white" p={{ base: 4, md: 8, lg: 12 }}>
      <SVGIcon name="logo-verbasa" h={8} w="auto" mb={4} />
      <Heading as="p" fontSize="2xl" mb={4}>
        De profissionais para profissionais. A maior e mais desejada mesa
        proprietária do Brasil.
      </Heading>
      <Flex>
        <Button as={Link} href="#" variant="outline" colorScheme="brand" mr={8}>
          Saiba mais
        </Button>
        <Button as={Link} href="#" variant="solid" colorScheme="brand">
          Entre para o time
        </Button>
      </Flex>
    </Box>
  </Container>
)

interface pageContextProps {
  categories: {
    data: {
      allMdx: {
        edges: Array<{
          node: {
            id: string
            frontmatter: {
              title: string
              slug: string
            }
          }
        }>
      }
    }
  }
}

interface PageProps {
  data: any
  pageContext: pageContextProps
}

const PagesLayout: React.FC<PageProps> = ({ data, pageContext }) => {
  const categoryFound = pageContext.categories.data.allMdx.edges.find(
    item => item.node.frontmatter.slug === data.mdx.frontmatter.category
  )
  const category = { ...categoryFound?.node.frontmatter }

  const templateData = {
    post: {
      ...data.mdx.frontmatter,
      body: data.mdx.body,
      category,
    },
  }
  return (
    <DefaultLayout>
      <Box
        bgColor="gray.200"
        bgImg={`url(${templateData.post.bgImage})`}
        bgSize="100% 500px"
        bgPos="center top"
        bgRepeat="no-repeat"
      >
        <Container>
          <Breadcrumb
            spacing="8px"
            separator={<FaChevronRight color="gray.500" size={10} />}
            pt={20}
            mb={-8}
            color="white"
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/blog">
                Blog
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href={`/blog/category${category.slug}`}>
                {category.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>

        <PostTemplate data={{ ...templateData }} />
        <MarketBox />
      </Box>
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
        category
        author
        caption
        bgImage
        image
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
          lastUpdate: dateModified(
            formatString: "DD [de] MMMM, YYYY"
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
