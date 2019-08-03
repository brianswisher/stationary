import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stations from "../components/stations"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: 750, marginBottom: '1.45rem' }}>
      <Stations />
    </div>
  </Layout>
)

export default IndexPage
