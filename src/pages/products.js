import React, { Component } from 'react'
import { graphql, Link} from "gatsby";
import Layout from "../components/Layout";
import styles from "../components/products.module.css";
import Image from "gatsby-image";

const products = ({data}) => {
  const {
    allContentfulProduct: { nodes: products}
  } = data;
  console.log(products)
        return (
            <Layout>
                <section className={styles.page}>
                    {
                      products.map((product) => {
                        return <article key={product.id}>
                          <Image
                            alt={product.title}
                            fluid={product.image.fluid}
                          >
                          </Image>
                          <h3>{product.title}<span>${product.price}</span></h3>
                          <Link to={`/products/${product.slug}`}>more details</Link>
                        </article>
                      })
                    }
                </section>
                
            </Layout>
        )
}

export default products



export const query = graphql`
  {
    allContentfulProduct {
      nodes {
      id
        title
        slug
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

