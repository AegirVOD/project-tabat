import * as React from 'react'
import logo from '../images/tabat_logo.png'
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    return (
        <div className="flex w-full px-10 py-5 items-center justify-between">
          <img src={logo} alt="Tabat Logo" style={{ width: 100, height: 100 }}/>
          <h1 className="text-4xl">TABAT</h1>
          <a href='/blog' className="text-xl">BLOG</a>
        </div>
    )
}

export default Navbar
