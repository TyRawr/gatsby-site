import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FontAwesome from 'react-fontawesome';

import './index.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }



  render() {
    return (
      <header
        style={{
          font: 'Helvetica',
          background: 'hsla(0, 0%, 0%, .8);',
        }}
        className='test'
      >
        <nav className='container'>
          <div className='header-container'>
            <h1>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Tyrawr
              </Link>
            </h1>
            <FontAwesome
              className=''
              name='bars'
              size='20x'
              style={{ color: 'white' }}
            />
          </div>
        </nav>
      </header>
    )
  }
}

class DropDown extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return (
      <div className="mega-drop-down container">
        <nav className="mega-drop-down-container">
          <ul>
            <li><Link to="/contact.js">Contact</Link></li>
            <li><Link to="/contact.js">Contact1</Link></li>
            <li><Link to="/contact.js">Contact3</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <link href="/static/fonts/fontawesome-all.min.css" rel="stylesheet"/>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <DropDown />
    <div className='container root'>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
