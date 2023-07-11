import * as React from "react"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="flex flex-col items-center py-5">
          <h3>Contact</h3>
        <div className="flex w-full px-10items-center justify-center flex flex-row">
          <div className="p-4">
            <a href="https://www.facebook.com/devguys.fr/" target="_blank">
              <FaFacebook size={32}/>
            </a>
          </div>
          <div className="p-4">
            <a href="https://www.linkedin.com/company/devguys/" target="_blank">
              <FaLinkedin size={32}/>
            </a>
          </div>
        </div>
        </div>
    )
}

export default Footer
