import React from "react"
import { MDXProvider } from "@mdx-js/react"
import components from "../../../components/mdx"

import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import { Container, Card, MDXBodyRender } from "../../../components/"

interface BlockDescriptionProps {
  title: string
  cards: Array<{
    title: string
    icon: string
    text: string
    link: string
  }>
  body: string
  isPreview?: boolean
}

const BlockDescription: React.FC<BlockDescriptionProps> = ({
  title,
  body,
  isPreview = false,
}) => {
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
    title: string
    cards: Array<{
      title: string
      icon: string
      text: string
      link: string
    }>
    body: string
    isPreview?: boolean
  }
}

const Template: React.FC<TemplateProps> = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <BlockDescription {...data} />
    </MDXProvider>
  )
}

export default Template
