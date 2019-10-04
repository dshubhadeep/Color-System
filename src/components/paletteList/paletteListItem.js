import React from "react"

import SwatchList from "../swatchList"

const paletteListItem = ({ palette }) => (
  <div className="p-5">
    <div>
      <h2 className="text-xl font-semibold text-gray-800 tracking-wide text-center capitalize">
        {palette.color}
      </h2>
    </div>

    <SwatchList swatches={palette.swatch} />
  </div>
)

export default paletteListItem
