import React from "react"
import BackgroundSection from "../components/BackgroundSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection />
  </Layout>
)
