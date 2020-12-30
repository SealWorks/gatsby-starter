import React from "react"
import { MDXProvider } from "@mdx-js/react"
import components from "../../../components/mdx"

import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { SVGIcon, Container, MDXBodyRender } from "../../../components/"

interface BlockCallToActionProps {
  title: string
  cards: Array<{
    title: string
    icon: string
  }>
}

const BlockCallToAction: React.FC<BlockCallToActionProps> = ({
  title,
  cards,
}) => {
  return (
    <Box as="section" bg="aux.50">
      <Center py={20}>
        <VStack>
          <Heading as="p">{title}</Heading>
          <HStack pt="10" spacing={8}>
            {cards.map(card => (
              <Center direction="row" key={card.title}>
                <VStack>
                  <SVGIcon name={card.icon} w="auto" h={{ base: 24, lg: 32 }} />
                  <Text as="h1" fontSize={{ lg: "xl" }} fontWeight="900">
                    {card.title}
                  </Text>
                </VStack>
              </Center>
            ))}
          </HStack>
        </VStack>
      </Center>
    </Box>
  )
}

interface BlockBodyProps {
  body: string
  isPreview?: boolean
}

const BlockBody: React.FC<BlockBodyProps> = ({ body, isPreview = false }) => {
  return (
    <Box py={10}>
      <Container>
        <MDXBodyRender body={body} isPreview={isPreview} />
      </Container>
    </Box>
  )
}

interface TemplateProps {
  data: {
    callToAction: BlockCallToActionProps
    body: string
  }
}

const Template: React.FC<TemplateProps> = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <BlockCallToAction {...data.callToAction} />
      <BlockBody {...data} />
    </MDXProvider>
  )
}

export default Template
