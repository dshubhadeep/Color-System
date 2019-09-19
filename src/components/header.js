import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <Link to="/">
        <h2 className="text-gray-100 font-semibold tracking-wider text-lg hover:text-gray-200">
          Color palette
        </h2>
      </Link>
    </nav>
  )
}

export default Header
