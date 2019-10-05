import React from "react"
import PropTypes from "prop-types"
import { toast } from "react-toastify"
import Header from "./header"

import "react-toastify/dist/ReactToastify.min.css"

toast.configure({
  autoClose: 3000,
})

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
