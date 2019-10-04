import React from "react"

const paletteListItem = ({ palette }) => {
  return (
    <div className="p-3">
      <h2 className="text-xl font-semibold text-gray-800 tracking-wide text-center capitalize">
        {palette.color}
      </h2>
    </div>
  )
}

export default paletteListItem
