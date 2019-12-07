import PropTypes from 'prop-types'
import React from 'react'
import { useSiteMetadata } from '../Common/useSiteMetadata'
import Footer from '../Footer'
import Header from '../Header'
import './bootstrap.min.css'
import './layout.css'

const Layout = ({ children }) => {
  const { title, author } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title} />
      <main id="content">{children}</main>
      <Footer siteAuthor={author} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
