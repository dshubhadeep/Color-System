import React from "react"
import { getLuminance } from "../../utils"

const BarItem = ({ color, bgColor }) => {
  const luminance = getLuminance(bgColor) / 255
  const textClass = luminance > 0.5 ? "text-black" : "text-white"

  return (
    <a
      className={`${textClass} bar-item-container`}
      href={`#${color}`}
      style={{ backgroundColor: bgColor }}
      title={color}
    >
      <p className="bar-item-text">{color}</p>
    </a>
  )
}

export default BarItem
