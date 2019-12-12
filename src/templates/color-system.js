import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PaletteList from "../components/paletteList"
import QuickAccessBar from "../components/quickAccessBar"
import SEO from "../components/seo"

const ColorSystem = ({ data }) => {
  const { name, palettes, url } = data.dataJson

  return (
    <Layout>
      <SEO title={name} />
      <div className="my-4 flex justify-center items-center">
        <h1 className="text-center text-3xl text-gray-800 font-semibold tracking-wide">
          {name}
        </h1>
        <div className="ml-2 bg-gray-800 text-white px-3 py-1 text-xs hover:bg-white hover:text-gray-800">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </div>
      </div>
      <QuickAccessBar palettes={palettes} />
      <PaletteList palettes={palettes} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    dataJson(fields: { slug: { eq: $slug } }) {
      name
      url
      palettes {
        color
        swatch {
          hex
          rgb
        }
      }
    }
  }
`

export default ColorSystem
