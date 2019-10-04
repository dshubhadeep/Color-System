import React from "react"

import PaletteListItem from "./paletteListItem"

import "./paletteList.css"

const PaletteList = ({ palettes }) => {
  console.log(palettes)

  return (
    <div className="palette-container">
      {palettes.map(palette => {
        return <PaletteListItem palette={palette} key={palette.color} />
      })}
    </div>
  )
}

export default PaletteList
