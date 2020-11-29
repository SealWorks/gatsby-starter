import React from "react"
import { Flex, Box, Heading } from "@chakra-ui/react"
import MDX from "mdx-scoped-runtime"
import mdxComponents from "../../../components/mdx"

const components = {
  ...mdxComponents,
  h2: props => <h1 style={{ color: "tomato" }} {...props} />,
}

const scope = {
  ...mdxComponents,
}

const PreviewTemplate = ({ entry }) => {
  const title = entry.getIn(["data", "title"])
  const body = entry.getIn(["data", "body"])
  return (
    <Box>
      <Heading>{title}</Heading>
      <MDX components={components} scope={scope}>
        {body}
      </MDX>
    </Box>
  )
}

export default PreviewTemplate
