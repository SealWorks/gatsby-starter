import React from "react"
import { DefaultLayout } from "../../components"
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
