
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"
import NavBar from "./global/NavBar"
import Footer from "./global/Footer"


const Layout = ({ children }) => {
return (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
