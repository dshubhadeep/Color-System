import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SystemList from "../components/systemList"

const IndexPage = ({ data }) => {
  const nodes = data.allDataJson.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div className="my-4">
        <h1 className="text-center text-3xl text-gray-800 font-semibold tracking-wide">
          Palettes
        </h1>

        <SystemList nodes={nodes} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allDataJson(sort: { fields: name, order: ASC }) {
      edges {
        node {
          parent {
            id
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`

export default IndexPage
