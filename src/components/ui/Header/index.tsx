import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { graphql, StaticQuery } from "gatsby"
import React, { useCallback, useState } from "react"
import Container from "../../layout/Container"
import Link from "../../mdx/Link"
import BurgerMenuIcon from "./BurgerMenuIcon"

interface menuItemProps {
  label: string
  link: string
}

const Header: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const toggleNavbarMenu = useCallback(() => {
    console.log("toggle")
    setIsNavbarOpen(!isNavbarOpen)
  }, [isNavbarOpen])
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { logo, menu } = data.mdx.frontmatter
        return (
          <Box as="header" bg={{ md: "brand.50" }} color={{ md: "#fff" }}>
            <Container>
              <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                mb={8}
                p={8}
                color={{ md: "#fff" }}
              >
                <Flex align="center">
                  <Image src={logo.relativePath} />
                </Flex>
                <Box display={{ base: "block", md: "none" }}>
                  <BurgerMenuIcon
                    toggleNavbarMenu={toggleNavbarMenu}
                    isNavbarOpen={isNavbarOpen}
                  />
                </Box>
                <Box
                  display={{
                    base: isNavbarOpen ? "block" : "none",
                    md: "block",
                  }}
                  flexBasis={{ base: "100%", md: "auto" }}
                >
                  <Flex
                    align={["center", "center", "center", "center"]}
                    justify={[
                      "center",
                      "space-between",
                      "flex-end",
                      "flex-end",
                    ]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                  >
                    {menu.map((item: menuItemProps) => (
                      <Text
                        key={item.label}
                        mb={{ base: 8, sm: 0 }}
                        mr={{ base: 0, sm: 0 }}
                        display="block"
                        __hover={{}}
                      >
                        <Link href={item.link}>{item.label}</Link>
                      </Text>
                    ))}
                  </Flex>
                </Box>
              </Flex>
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
    mdx(frontmatter: { componentKey: { eq: "header" } }) {
      frontmatter {
        logo {
          relativePath
        }
        menu {
          label
          link
        }
      }
    }
  }
`
