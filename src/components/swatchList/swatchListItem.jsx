import React from "react"
import { toast } from "react-toastify"

const copyToClipBoard = e => {
  navigator.clipboard.writeText(e.target.textContent)
  toast(`📋 ${e.target.textContent} copied.`, {
    bodyClassName: "text-gray-800",
    progressClassName: "toast-progress",
  })
}

const swatchListItem = ({ swatch }) => {
  return (
    <div className="flex justify-between p-4 bg-gray-100 border-b border-gray-300">
      <div
        className="w-10 h-10 rounded-lg shadow-inner border border-gray-500"
        style={{ background: swatch.hex }}
      ></div>
      <div className="text-center">
        <p className="text-xs text-gray-700 font-semibold tracking-widest">
          HEX
        </p>
        <p
          className="text-sm text-gray-900 cursor-pointer uppercase tracking-wider mt-1"
          onClick={copyToClipBoard}
        >
          {swatch.hex}
        </p>
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-700 font-semibold tracking-widest">
          RGB
        </p>
        <p
          className="text-sm text-gray-900 cursor-pointer tracking-wider mt-1"
          onClick={copyToClipBoard}
        >
          {swatch.rgb}
        </p>
      </div>
    </div>
  )
}

export default swatchListItem
