import React from "react"
import { Box, Button, chakra } from "@chakra-ui/react"

const styles = require("./styles.module.css")

interface BurgerMenuIconProps {
  toggleNavbarMenu(): void
  isNavbarOpen: boolean
}

const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = ({
  toggleNavbarMenu,
  isNavbarOpen,
}) => {
  return (
    <Button
      className={`${styles.burgerMenu}`}
      onClick={toggleNavbarMenu}
      bg="transparent"
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
    >
      <Box className={isNavbarOpen ? styles.open : ""}>
        <chakra.span>&nbsp;</chakra.span>
        <chakra.span>&nbsp;</chakra.span>
        <chakra.span>&nbsp;</chakra.span>
      </Box>
    </Button>
  )
}

export default BurgerMenuIcon
