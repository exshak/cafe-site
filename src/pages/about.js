import React from "react"
import About from "../components/About"
import { Banner } from "../components/BannerA"
import Layout from "../components/layout"
import SEO from "../components/seo"

// NOTE:

export default () => (
  <Layout>
    <SEO title="About" />
    <Banner />
    <About />
  </Layout>
)
