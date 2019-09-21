import React from "react"

const SystemListItem = ({ node }) => {
  return (
    <div className="text-center p-6 border border-gray-600 rounded cursor-pointer hover:border-gray-900 hover:bg-gray-900 hover:text-white">
      <h2 className="text-xl tracking-wide">{node.parent.name}</h2>
    </div>
  )
}

export default SystemListItem
