import React from "react"
import DefaultLayout from "../../components/layouts/DefaultLayout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import components from "../../components/mdx"
import { graphql } from "gatsby"
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import Link from "../../components/mdx/Link"
import SVGIcon from "../../components/ui/SVGIcon"
import Container from "../../components/layout/Container"

interface ButtonScheme {
  colorScheme: string
  variant: string
  label: string
  link: string
}

interface BlockHeroProps {
  title: string
  headline: string
  buttons: ButtonScheme[]
  bgImage: string
}

interface BlockCallToActionProps {
  title: string
  cards: Array<{
    title: string
    icon: string
  }>
  buttons: ButtonScheme[]
}

interface BlockDescriptionProps {
  title: string
  cards: Array<{
    title: string
    icon: string
    text: string
    link: string
  }>
  body: string
}

interface TemplateProps {
  data: {
    hero: BlockHeroProps
    callToAction: BlockCallToActionProps
    description: BlockDescriptionProps
  }
}
interface QueryDataToAny {
  data?: any
}

const BlockHero: React.FC<BlockHeroProps> = ({
  title,
  headline,
  buttons,
  bgImage,
}) => {
  return (
    <Box
      bgImage={`url(${bgImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Center bg="rgba(30,30,30,0.7)" h="600px">
        <Flex py={20} color="white" direction="column" align="center">
          <Heading>{title}</Heading>
          <Text pt={8} pb={12}>
            {headline}
          </Text>
          <Center>
            <ButtonGroup>
              {buttons.map(button => (
                <Button
                  key={button.label}
                  as={Link}
                  colorScheme={button.colorScheme}
                  variant={button.variant}
                  p={6}
                  href={button.link}
                >
                  {button.label}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
        </Flex>
      </Center>
    </Box>
  )
}

const BlockCallToAction: React.FC<BlockCallToActionProps> = ({
  title,
  cards,
  buttons,
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
          <ButtonGroup pt={10}>
            {buttons.map(button => (
              <Button
                key={button.label}
                as={Link}
                colorScheme={button.colorScheme}
                variant={button.variant}
                p={6}
                href={button.link}
              >
                {button.label}
              </Button>
            ))}
          </ButtonGroup>
        </VStack>
      </Center>
    </Box>
  )
}

const BlockDescription: React.FC<BlockDescriptionProps> = ({
  body,
  cards,
  title,
}) => {
  return (
    <Box p={20}>
      <Container>
        <Stack direction={{ base: "column", md: "row" }} w="100%">
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading fontSize="3xl" fontWeight="700">
              {title}
            </Heading>
            <MDXRenderer>{body}</MDXRenderer>
          </Box>
          <Wrap w={{ base: "100%", md: "50%" }}>
            {cards.map(card => (
              <WrapItem
                key={card.icon}
                w={{ base: "100%", md: "50%" }}
                border="3px solid #f00"
                shadow="xl"
              >
                {card.text}
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Container>
    </Box>
  )
}

export const Template: React.FC<TemplateProps> = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <BlockHero {...data.hero} />
      <BlockCallToAction {...data.callToAction} />
      {/* <BlockDescription {...data.description} /> */}
    </MDXProvider>
  )
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
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query HomeTemplate($id: String) {
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

export default PagesLayout
