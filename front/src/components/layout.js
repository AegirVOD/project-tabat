import * as React from 'react'
import Navbar from './navbar'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
          <Navbar />
          <main>
            <h1>{pageTitle}</h1>
            {children}
          </main>
        </div>
    )
}

export default Layout
