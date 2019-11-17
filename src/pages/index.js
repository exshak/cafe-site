import React from "react"
import BackgroundSection from "../components/BackgroundSection"
import Banner from "../components/Banner"
import BannerB from "../components/BannerB"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection />
    <Banner />
    <BannerB />
  </Layout>
)
