import React from "react"

import SwatchList from "../swatchList"

const paletteListItem = ({ palette }) => (
  <div className="p-5">
    <div>
      <a href={`#` + palette.color}>
        <h2
          className="text-xl font-semibold text-gray-800 tracking-wide text-center capitalize"
          id={palette.color}
        >
          {palette.color}
        </h2>
      </a>
    </div>

    <SwatchList swatches={palette.swatch} />
  </div>
)

export default paletteListItem
