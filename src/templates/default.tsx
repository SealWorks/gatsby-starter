import React from "react"
import DefaultLayout from "../components/layouts/DefaultLayout"

const DefaultTemplate: React.FC = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>
}

export default DefaultTemplate
