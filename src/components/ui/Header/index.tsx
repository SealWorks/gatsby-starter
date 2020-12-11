import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  ListItem,
  useDisclosure,
  LinkProps,
} from "@chakra-ui/react"
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Container from "../../layout/Container"
import Link from "../../mdx/Link"
import SVGIcon from "../SVGIcon"
import BurgerMenuIcon from "./BurgerMenuIcon"

interface DataProps {
  mdx: {
    body: string
    frontmatter: {
      logo: string
      menu: Array<{
        label: string
        link: string
      }>
      buttons: Array<{
        label: string
        link: string
        variant: "solid" | "ghost" | "outline" | "link"
        colorScheme: string
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
      <Link href={href} _hover={{ textDecoration: "none" }}>
        {children}
      </Link>
    </ListItem>
  )
}

const Header: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <StaticQuery
      query={query}
      render={(data: DataProps) => {
        const { logo, menu, buttons } = data.mdx.frontmatter
        return (
          <Box as="header" bg={"white"} color={"black"} shadow={"base"}>
            <Container>
              <Flex direction={{ base: "column", md: "row" }}>
                <Flex
                  items="center"
                  justify={{ base: "space-between", md: "flex-start" }}
                >
                  <Box display={{ base: "block", md: "none" }} w={8} pt={2}>
                    <BurgerMenuIcon
                      toggleNavbarMenu={onToggle}
                      isNavbarOpen={isOpen}
                      outline="none"
                    />
                  </Box>
                  <Link href="/">
                    <SVGIcon name={logo} h={10} w="auto" mr={{ md: 4 }} />
                  </Link>
                  <Box display={{ base: "block", md: "none" }} w={8}></Box>
                </Flex>
                <Box
                  as="nav"
                  display={{ base: isOpen ? "block" : "none", md: "block" }}
                  w="100%"
                >
                  <Flex
                    w="100%"
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align="center"
                  >
                    <Flex
                      as="ul"
                      direction={{ base: "column", md: "row" }}
                      justify="center"
                      align="center"
                      listStyleType="none"
                    >
                      {menu.map(menuItem => (
                        <MenuItem key={menuItem.label} href={menuItem.link}>
                          {menuItem.label}
                        </MenuItem>
                      ))}
                    </Flex>
                    <Flex justify="center" align="center">
                      <ButtonGroup>
                        {buttons.map(button => (
                          <Button
                            key={button.label}
                            as={Link}
                            href={button.link}
                            colorScheme={button.colorScheme}
                            variant={button.variant}
                          >
                            {button.label}
                          </Button>
                        ))}
                      </ButtonGroup>
                    </Flex>
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
        logo
        menu {
          label
          link
        }
        buttons {
          label
          link
          variant
          colorScheme
        }
      }
    }
  }
`
