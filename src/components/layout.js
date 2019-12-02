import React from "react"
import PropTypes from "prop-types"
import { toast } from "react-toastify"
import Navbar from "./navbar"

import "react-toastify/dist/ReactToastify.min.css"

toast.configure({
  autoClose: 3000,
})

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
