import React from 'react'
import Header from "../examples/header";
import HeaderStatic from "../examples/header-static";
import Layout from "../components/Layout"
import {graphql} from "gatsby";

const examples = ({data}) => {
    const {site: {info: {author}}} = data;
    return (
        <Layout>
            <p>Example page</p>
            <Header/>
            <HeaderStatic/>
            <h5>{author}</h5>
        </Layout>
    )
}

export const data = graphql`
query MyQuery {
  site {
    info: siteMetadata {
      author
      data
      description
      person {
        age
        name
      }
      title
    }
  }
}

`

export default examples
