import React from "react"

import SystemListItem from "./systemListItem"

import "./systemList.css"

const SystemList = ({ nodes }) => (
  <div className="system-list-container">
    {nodes.map((el) => {
      return <SystemListItem key={el.node.parent.id} node={el.node} />
    })}
  </div>
)

export default SystemList
