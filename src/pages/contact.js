import React from "react"
import Contact from "../components/Contact"
import Layout from "../components/layout"
import Map from "../components/Map"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Contact" />
    <Contact />
    <Map />
  </Layout>
)
