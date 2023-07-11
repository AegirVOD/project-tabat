import React, { useState } from "react";

const BlogText = ({ children, maxLength }) => {
    const text = children
    const [isTruncated, setIsTruncated] = useState(true)

    const toggleIsTruncated = () => setIsTruncated(!isTruncated)

    if (!text) return null
    if (text.length <= maxLength) return text

    return (
            <p className="mt-4 text-gray-600">
            {isTruncated ? text.slice(0, maxLength) : text}
            <span onClick={toggleIsTruncated} className="text-blue-500 cursor-pointer">
            {isTruncated ? '... Show more' : ' Show less'}
        </span>
            </p>
    )
}

export default BlogText
