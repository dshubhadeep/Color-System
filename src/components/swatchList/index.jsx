import React from "react"

import SwatchListItem from "./swatchListItem"

const swatchList = ({ swatches }) => (
  <div className="mt-6">
    {swatches.map((swatch) => {
      return <SwatchListItem swatch={swatch} key={swatch.hex} />
    })}
  </div>
)

export default swatchList
