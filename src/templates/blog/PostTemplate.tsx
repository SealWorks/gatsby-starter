import React from "react"
import { MDXProvider } from "@mdx-js/react"
import components from "../../components/mdx"

import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { Container, MDXBodyRender } from "../../components/"

interface BlockPostProps {
  title: string
  category: { slug: string; title: string }
  bgImage: string
  caption: string
  image: string
  metadata: {
    dateModified: Date
    datePublished: Date
    relativeDateModified: string
    originalDatePublished: string
  }
  body: string
  isPreview?: boolean
}

const BlockPost: React.FC<BlockPostProps> = ({
  title,
  bgImage,
  caption,
  image,
  metadata: {
    datePublished,
    dateModified,
    originalDatePublished,
    relativeDateModified,
  },
  body,
  isPreview = false,
}) => {
  return (
    <Container>
      <Box rounded="xl" bg="white" p={{ base: 4, md: 8, lg: 12 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={8}>
          <Flex
            bg={`url(${bgImage}) center center no-repeat`}
            bgSize="cover"
            h={52}
            justify="center"
            align="center"
            position="relative"
            zIndex="0"
            rounded="md"
            overflow="hidden"
          >
            <Heading color="rgba(255,255,255,0.618)">{caption}</Heading>
            <Flex
              position="absolute"
              top="0"
              zIndex="-1"
              px={12}
              justify="center"
              align="center"
              h="100%"
            >
              <Image src={image} rounded="md" />
            </Flex>
          </Flex>
          <Box>
            <Text color="aux.200" mb={4}>
              {datePublished === dateModified
                ? `${originalDatePublished}`
                : `Atualizado ${relativeDateModified}`}
            </Text>
            <Heading fontSize="3xl" fontWeight="700" mb={2}>
              {title}
            </Heading>
          </Box>
        </SimpleGrid>
        <MDXBodyRender body={body} isPreview={isPreview} />
      </Box>
    </Container>
  )
}

interface TemplateProps {
  data: {
    post: BlockPostProps
  }
}

const PostTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <MDXProvider components={components}>
      {/* <div>{JSON.stringify(data)}</div> */}
      <BlockPost {...data.post} />
    </MDXProvider>
  )
}

export default PostTemplate
