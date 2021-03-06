import React from "react"
import { Link } from "gatsby"

const formatName = (name) => name.replace(/_/g, " ")

const SystemListItem = ({ node }) => (
  <>
    <Link to={`/${node.parent.name}/`}>
      <div
        className="text-center p-6 border border-gray-600 rounded cursor-pointer hover:border-gray-900 hover:bg-gray-900 hover:text-white"
        style={{ transition: "all 0.3s linear" }}
      >
        <h2 className="text-xl tracking-wide capitalize">
          {formatName(node.parent.name)}
        </h2>
      </div>
    </Link>
  </>
)

export default SystemListItem
