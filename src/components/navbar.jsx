import React from "react"
import { Link } from "gatsby"

import GithubLogo from "./githubLogo"

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between">
      <Link to="/">
        <h2 className="text-gray-100 font-semibold tracking-wider text-lg hover:text-gray-200">
          Color System
        </h2>
      </Link>
      <a href="https://github.com/dshubhadeep/Color-System">
        <GithubLogo />
      </a>
    </nav>
  )
}

export default Navbar
