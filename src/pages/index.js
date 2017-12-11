import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  
  <div>
    <div class="stars">
      <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"/>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
        <span>
          PURE CSS
        </span>
        <br/>
        <span>
          PARALLAX PIXEL STARS
        </span>
      </div>
    </div>
    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
