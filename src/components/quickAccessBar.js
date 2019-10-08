import React from "react"
import { getLuminance } from "../utils"

import "./quickAccessBar.css"

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

const QuickAccessBar = ({ palettes }) => {
  const list = palettes.map(({ color, swatch }) => ({
    color,
    bgColor: swatch[Math.floor(swatch.length / 2)].rgb,
  }))

  return (
    <div className="qa_container">
      {list.map(item => {
        return (
          <BarItem color={item.color} bgColor={item.bgColor} key={item.color} />
        )
      })}
    </div>
  )
}

export default QuickAccessBar
