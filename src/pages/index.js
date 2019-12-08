import React from 'react'
import BackgroundSliders from '../components/Home/BackgroundSliders'
import Banner from '../components/home/Banner'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSliders />
    <Banner />
  </Layout>
)
