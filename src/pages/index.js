import React from 'react'
import BackgroundSection from '../components/home/BackgroundSection'
import Banner from '../components/home/Banner'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection />
    <Banner />
  </Layout>
)
