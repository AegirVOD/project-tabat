import * as React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"

const IndexPage = () => {
    return (
        <Layout>
          <Banner />
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
