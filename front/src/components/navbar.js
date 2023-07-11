import * as React from "react"
import logo from "../images/tabat_logo.png"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

const Navbar = ({ location }) => {
    return (
        <div className="flex w-full px-10 py-5 items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Tabat Logo" style={{ width: 100, height: 100 }}/>
          </Link>
          <h1 className="text-4xl">TABAT</h1>
          {
              location == 'blog' ? (
                  <Link to='/' className="text-xl">ACCUEIL</Link>
              ) : (
                  <Link to='/blog' className="text-xl">BLOG</Link>
              )
          }
        </div>
    )
}


export default Navbar
