import React from 'react'
import Link from 'gatsby-link'
import { SharedComponent } from '@monorepo-test/components'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <SharedComponent />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
