import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { SiteMetadata } from '../common/siteMetadata'
import Footer from '../footer'
import Header from '../header'
import './bootstrap.min.css'
import './layout.css'

const Layout = ({ children }) => {
  const { title, author } = SiteMetadata()

  return (
    <Fragment>
      <Header />
      <main id="content">{children}</main>
      <Footer siteTitle={title} siteAuthor={author} />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
