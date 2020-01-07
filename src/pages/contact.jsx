import React from 'react'
import ContactSection from '../components/contact'
import Layout from '../components/layout'
import SEO from '../components/layout/seo'
import MapSection from '../components/map'

export default () => (
  <Layout>
    <SEO title="Contact" />
    <MapSection />
    <ContactSection />
  </Layout>
)
