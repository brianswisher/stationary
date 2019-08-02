import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stations from "../components/stations"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to Stationary.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Stations />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
