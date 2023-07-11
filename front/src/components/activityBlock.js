import * as React from "react"

const ActivityBlock = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-sm md:max-w-xl lg:max-w-lg m-2">
          <img className="w-full h-3/5 object-cover" src={image} alt={title} />
          <div className="p-4 h-2/5 flex flex-col justify-center">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
    )
}

export default ActivityBlock
