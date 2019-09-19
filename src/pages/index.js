import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="my-4">
      <h1 className="text-center text-3xl text-gray-800 font-semibold tracking-wide">
        Palettes
      </h1>
    </div>
  </Layout>
)

export default IndexPage
