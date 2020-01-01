import React from 'react'
import Contact from '../components/contact'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'
import Map from '../components/map/Map'

export default () => (
  <Layout>
    <SEO title="Contact" />
    <Map />
    <Contact />
  </Layout>
)
