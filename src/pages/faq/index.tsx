import React from "react"
import { graphql } from "gatsby"
import { Container, DefaultLayout } from "../../components"
import FaqCard from "../../templates/faq/CategoryTemplate"
import { Box, Flex } from "@chakra-ui/react"
import { FaqForm } from "../../components"
import FaqCategoryCards from "../../templates/faq/FaqCategryCards"

const FaqIndex: React.FC = () => {
  return (
    <DefaultLayout>
      <FaqCategoryCards />
      <FaqForm />
    </DefaultLayout>
  )
}

export default FaqIndex
