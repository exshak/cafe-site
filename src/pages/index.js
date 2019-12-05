import React from 'react'
import SEO from '../components/common/seo'
import BackgroundSection from '../components/home/BackgroundSection'
import Banner from '../components/home/Banner'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection />
    <Banner />
  </Layout>
)
