import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  ListItem,
  useDisclosure,
  LinkProps,
  Text,
  Stack,
  Heading,
  UnorderedList,
  List,
  ListIcon,
  HStack,
  Divider,
} from "@chakra-ui/react"
import { graphql, StaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { useMemo } from "react"
import Container from "../../layout/Container"
import Link from "../../mdx/Link"
import SVGIcon from "../SVGIcon"
import { FaChevronRight } from "react-icons/fa"

interface DataProps {
  site: {
    siteMetadata: {
      info: {
        address?: {
          display: string
        }
        phone?: {
          number: string
          display: string
        }
        email?: {
          address: string
        }
      }
    }
  }
  mdx: {
    body: string
    frontmatter: {
      logo: string
      linksLists: Array<{
        title: string
        linksList: Array<{
          label: string
          link: string
        }>
      }>
    }
  }
}

const MenuItem: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <ListItem
      position="relative"
      p={3}
      pb={1}
      _after={{
        content: `" "`,
        position: "absolute",
        borderBottom: "2px",
        borderColor: "brand.500",
        bottom: 0,
        left: "50%",
        w: "0%",
        h: 0,
        transform: "translateX(-50%)",
        transition: "all",
        transitionDuration: "220ms",
      }}
      _hover={{
        _after: {
          w: "50%",
        },
      }}
    >
      <Link href={href}>{children}</Link>
    </ListItem>
  )
}

const Header: React.FC = () => {
  const copyYears = useMemo(() => {
    const registerYear = 2020
    const thisYear = new Date().getFullYear()
    return thisYear === registerYear
      ? registerYear
      : `${registerYear} - ${thisYear}`
  }, [])

  return (
    <StaticQuery
      query={query}
      render={(data: DataProps) => {
        const { body } = data.mdx
        const { logo, linksLists } = data.mdx.frontmatter
        const { info } = data.site.siteMetadata
        return (
          <Box as="footer" pt={10}>
            <Container>
              <Stack direction={{ base: "column", md: "row" }}>
                <Flex
                  w={{ base: "100%", md: "33%", lg: "40%" }}
                  direction="column"
                  align={{ base: "center", md: "start" }}
                >
                  <Link href="/" pb={6}>
                    <SVGIcon name={logo} h={10} w="auto" mr={{ md: 4 }} />
                  </Link>
                  <Text display={{ base: "none", md: "block" }}>
                    <MDXRenderer>{body}</MDXRenderer>
                  </Text>
                </Flex>
                <HStack w={{ base: "100%", md: "40%" }} align="start">
                  {linksLists.map(({ title, linksList }) => (
                    <Box key={title} w="50%">
                      <Heading as="h4" color="aux.400" fontSize="xl" mb={4}>
                        {title}
                      </Heading>
                      <List>
                        {linksList.map(link => (
                          <ListItem mb={2}>
                            <Link
                              href={link.link}
                              display="flex"
                              alignItems="center"
                            >
                              <ListIcon
                                as={FaChevronRight}
                                color="aux.100"
                                h="10px"
                              />
                              {link.label}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}
                </HStack>
                <Box w={{ base: "100%", md: "25%", lg: "20%" }}>
                  <Heading as="h4" color="aux.400" fontSize="xl" mb={4}>
                    Nosso contato
                  </Heading>
                  {info?.address?.display && (
                    <Text mb={2}> {info.address.display}</Text>
                  )}
                  {info?.phone?.number && (
                    <Text mb={2}>
                      <Link href={info.phone.number}>{info.phone.display}</Link>
                    </Text>
                  )}
                  {info?.email?.address && (
                    <Text mb={2}>
                      <Link href="/contato">{info.email.address}</Link>
                    </Text>
                  )}
                </Box>
              </Stack>
            </Container>
            <Container>
              <hr />
              <Text color="aux.100" p={6} align="center">
                © {copyYears} Verbasa. All Rights Reserved.
              </Text>
            </Container>
          </Box>
        )
      }}
    />
  )
}

export default Header

const query = graphql`
  query {
    site {
      siteMetadata {
        info {
          address {
            display
          }
          phone {
            number
            display
          }
          email {
            address
          }
        }
      }
    }
    mdx(frontmatter: { componentKey: { eq: "footer" } }) {
      body
      frontmatter {
        logo
        linksLists {
          title
          linksList {
            label
            link
          }
        }
      }
    }
  }
`
