import React from "react"
import Link from "./Link"
import { chakra, Flex } from "@chakra-ui/react"

const P: React.FC = props => <chakra.p {...props} />

export default {
  Flex,
  Link,
  P,
  a: Link,
  p: chakra("p"), // not working
}
