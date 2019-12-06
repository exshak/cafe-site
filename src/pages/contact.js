import React from 'react'
import Contact from '../components/contact/Contact'
import Layout from '../components/Layout'
import Map from '../components/map/Map'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO title="Contact" />
    <Map />
    <Contact />
  </Layout>
)
