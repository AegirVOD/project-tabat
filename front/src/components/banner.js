import * as React from "react"
import bgImage from "../images/architect.jpg"

const Banner = () => {
    return (
       <div
         className="relative bg-cover bg-center text-center text-white py-20 px-5"
         style={{
             backgroundImage: `url(${bgImage})`
         }}
       >
         <h2
           className="text-4xl font-bold"
           style={{ 
               textShadow: '4px 4px 2px rgba(0, 0, 0, 0.3)' 
           }}
         >
           L'expert BTP proche de vous
         </h2>
         <div
           className="text-xl font-medium"
           style={{
             textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' 
           }}
         >
           Avec 15 ans d'expériences, nous vous accompagnons pour votre prochain projet.
         </div>
       </div>
    )
}

export default Banner
