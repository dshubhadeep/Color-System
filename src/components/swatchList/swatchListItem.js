import React from "react"

const copyToClipBoard = e => {
  navigator.clipboard.writeText(e.target.textContent)
}

const swatchListItem = ({ swatch }) => {
  return (
    <div className="flex justify-between p-4 bg-gray-100 border-b border-gray-300">
      <div
        className="w-10 h-10 rounded-lg shadow-inner border border-2"
        style={{ background: swatch.hex }}
      ></div>
      <div className="text-center">
        <p className="text-xs text-gray-900 font-semibold tracking-widest">
          HEX
        </p>
        <p
          className="text-xs text-gray-800 cursor-pointer uppercase"
          onClick={copyToClipBoard}
        >
          {swatch.hex}
        </p>
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-900 font-semibold tracking-widest">
          RGB
        </p>
        <p
          className="text-xs text-gray-800 cursor-pointer"
          onClick={copyToClipBoard}
        >
          {swatch.rgb}
        </p>
      </div>
    </div>
  )
}

export default swatchListItem
