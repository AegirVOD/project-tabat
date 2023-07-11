import * as React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ location, children }) => {
    return (
        <div>
          <Navbar location={location}/>
          <main>
            {children}
          </main>
          <Footer />
        </div>
    )
}

export default Layout
