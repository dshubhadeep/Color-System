import React from "react"
import { Link } from "gatsby"

const SystemListItem = ({ node }) => (
  <>
    <Link to={`/${node.parent.name}/`}>
      <div className="text-center p-6 border border-gray-600 rounded cursor-pointer hover:border-gray-900 hover:bg-gray-900 hover:text-white">
        <h2 className="text-xl tracking-wide capitalize">{node.parent.name}</h2>
      </div>
    </Link>
  </>
)

export default SystemListItem
