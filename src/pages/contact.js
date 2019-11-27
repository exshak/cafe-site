import React from 'react'
import SEO from '../components/common/seo'
import Contact from '../components/contact/Contact'
import Layout from '../components/layout/layout'
import Map from '../components/map/Map'

export default () => (
  <Layout>
    <SEO title="Contact" />
    <Map />
    <Contact />
  </Layout>
)
