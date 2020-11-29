import React from "react"
import Footer from "../ui/Footer"
import Header from "../ui/Header"

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header>Head</Header>
      <section>{children}</section>
      <Footer>Footer</Footer>
    </>
  )
}

export default DefaultLayout
