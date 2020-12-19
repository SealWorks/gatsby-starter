import React, { useMemo } from "react"
import { graphql } from "gatsby"
import { Container, DefaultLayout, Link } from "../../components"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

interface CategoryObjProps {
  [key: string]: string
}

interface BlogQueryProps {
  data: {
    queryCategories: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            slug: string
          }
        }
      }>
    }

    queryPosts: {
      edges: Array<{
        node: {
          body: string
          frontmatter: {
            title: string
            slug: string
            category: string
            author: string
            caption: string
            bgImage: string
            image: string
            metadata: {
              title: string
              description: string
              dateModified: Date
              datePublished: Date
              lastUpdate: string
              image: string
            }
          }
        }
      }>
    }
  }
}

const BlogIndex: React.FC<BlogQueryProps> = ({ data }) => {
  const categoryNameObj = useMemo<CategoryObjProps>(() => {
    const initial = {}
    return data.queryCategories.edges.reduce((obj, item) => {
      return {
        ...obj,
        [item.node.frontmatter.slug]: item.node.frontmatter.title,
      }
    }, initial)
  }, [data])

  const { edges } = data.queryPosts

  return (
    <DefaultLayout>
      <Container>
        <Flex>
          {edges.map(
            ({
              node: {
                frontmatter: {
                  title,
                  slug,
                  image,
                  bgImage,
                  caption,
                  category,
                  metadata: { lastUpdate },
                },
              },
            }) => (
              <Box w="full" p={2} key={slug}>
                <Box
                  as={Link}
                  href={`/blog${slug}`}
                  w={{ base: "100%", md: "50%", lg: "33.3%" }}
                  rounded="md"
                  shadow="md"
                  overflow="hidden"
                  _hover={{
                    shadow: "2xl",
                    textDecoration: "none",
                    transform: "translateY(-1px)",
                  }}
                >
                  <Flex
                    bg={`url(${bgImage}) center center no-repeat`}
                    bgSize="cover"
                    h={60}
                    justify="center"
                    align="center"
                    color="rgba(255,255,255,0.618)"
                    position="relative"
                    zIndex="-1"
                  >
                    <Heading>{caption}</Heading>
                    <Flex
                      position="absolute"
                      top="0"
                      zIndex="-1"
                      px={10}
                      justify="center"
                      align="center"
                      h="100%"
                    >
                      <Image src={image} rounded="md" />
                    </Flex>
                  </Flex>
                  <Box>
                    <Flex justify="space-between" p={4}>
                      <Text
                        as="span"
                        color="brand.300"
                        textTransform="uppercase"
                        fontWeight="700"
                      >
                        {categoryNameObj[category]}
                      </Text>
                      <Text as="span" fontSize="sm" color="aux.200">
                        {lastUpdate}
                      </Text>
                    </Flex>
                    <Heading
                      as="h2"
                      fontSize="2xl"
                      p={4}
                      pt={0}
                      fontWeight="700"
                    >
                      {title}
                    </Heading>
                  </Box>
                </Box>
              </Box>
            )
          )}
        </Flex>
      </Container>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query {
    queryCategories: allMdx(
      filter: { frontmatter: { templateKey: { glob: "blog/category" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
    queryPosts: allMdx(
      filter: { frontmatter: { templateKey: { glob: "blog/post" } } }
      sort: { order: ASC, fields: frontmatter___metadata___dateModified }
    ) {
      edges {
        node {
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
              lastUpdate: dateModified(
                formatString: "DD [de] MMMM, YYYY"
                locale: "pt"
              )
              image
            }
          }
        }
      }
    }
  }
`
export default BlogIndex
