import { Center } from "@chakra-ui/react"
import React from "react"
import { DefaultLayout } from "../components"

const DefaultTemplate: React.FC = ({ children }) => {
  return (
    <DefaultLayout>
      <Center p={20} fontWeight="700" fontSize="2xl">
        {children}
      </Center>
    </DefaultLayout>
  )
}

export default DefaultTemplate
