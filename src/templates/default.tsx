import React from "react"
import { DefaultLayout } from "../components"

const DefaultTemplate: React.FC = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>
}

export default DefaultTemplate
