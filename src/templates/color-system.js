import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ColorSystem = ({ data }) => {
  const { name } = data.dataJson

  return (
    <Layout>
      <SEO title={`${name}`} />
      <div className="my-4">
        <h1 className="text-center text-3xl text-gray-800 font-semibold tracking-wide">
          {name}
        </h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    dataJson(fields: { slug: { eq: $slug } }) {
      name
      url
      palette {
        color
        swatch {
          hex
        }
      }
    }
  }
`

export default ColorSystem
