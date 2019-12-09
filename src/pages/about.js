import React from 'react'
import About from '../components/about/About'
import BackgroundAbout from '../components/About/BackgroundAbout'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO title="About" />
    <BackgroundAbout />
    <About />
  </Layout>
)
