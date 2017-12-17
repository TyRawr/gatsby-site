import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  
  <div style={{
      fontFamily: 'Montserrat, sans-serif',
    }}>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
    <div className="stars-container">
    <div className="stars"></div>
    <div className="twinkling"
      style={{
        top: '400',
      }}>
    </div>
    <div className="clouds"></div>
  </div>
    
    <h1 style={{
      fontColor: 'white',
    }}>
      Hi people
    </h1>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
