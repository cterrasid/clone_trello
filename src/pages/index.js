import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Register" />
      <section>
        <h1>Title</h1>
        <h2>Subtitle</h2>
        <button>Login with github</button>
        <button>Login with twitter</button>
        <button>Login with google</button>
      </section>
    </Layout>
  )
}
