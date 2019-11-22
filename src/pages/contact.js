import React from 'react'
import SEO from '../components/common/seo'
import Contact from '../components/contact/Contact'
import Map from '../components/contact/Map'
import Layout from '../components/layout/layout'

export default () => (
  <Layout>
    <SEO title="Contact" />
    <Map />
    <Contact />
  </Layout>
)
