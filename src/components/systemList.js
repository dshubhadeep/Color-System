import React from "react"

import SystemListItem from "./systemListItem"

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "40px",
  marginTop: "32px",
}

const SystemList = ({ nodes }) => {
  return (
    <div style={styles}>
      {nodes.map(el => {
        return <SystemListItem key={el.node.parent.id} node={el.node} />
      })}
    </div>
  )
}

export default SystemList
