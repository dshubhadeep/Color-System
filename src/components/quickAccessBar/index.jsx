import React from "react"

import BarItem from "./barItem"

import "./quickAccessBar.css"

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
