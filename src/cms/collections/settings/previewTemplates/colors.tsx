import React, { ComponentType } from "react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import {
  Box,
  Center,
  Container,
  HStack,
  Img,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"

interface colorSetProps {
  label: string
  colors: string[]
}

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
}) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Container>
        {data.colors.map((colorSet: colorSetProps) => (
          <Box key={colorSet.label}>
            <Text key={colorSet.label}>{colorSet.label}</Text>
            <HStack spacing={2}>
              {colorSet.colors &&
                colorSet.colors.map((color: string, index: number) => (
                  <Box key={index}>
                    <Text align="center">.{index * 100 || 50}</Text>
                    <Box bg={color} p={2} position="relative">
                      <Text color="white" opacity={0.25}>
                        {color}
                      </Text>
                    </Box>
                  </Box>
                ))}
            </HStack>
          </Box>
        ))}
      </Container>
    )
  } else {
    return <div>Loading ...</div>
  }
}

export default PreviewTemplate
