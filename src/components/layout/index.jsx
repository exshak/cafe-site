import PropTypes from 'prop-types'
import React from 'react'
import { SiteMetadata } from '../common/siteMetadata'
import Footer from '../footer'
import Header from '../header'
import './bootstrap.min.css'
import './layout.css'

const Layout = ({ children }) => {
  const { title, author } = SiteMetadata()

  return (
    <>
      <Header />
      <main id="content">{children}</main>
      <Footer siteTitle={title} siteAuthor={author} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
