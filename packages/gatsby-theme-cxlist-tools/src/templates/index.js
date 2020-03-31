import React from 'react'
import { graphql } from 'gatsby'
import Index from '../components/index'

function IndexPage({ data }) {
  return (
    <Index data={data} />
  )
}

export default IndexPage

export const query = graphql`
  query ToolsPage {
    allToolsYaml(sort: { order: ASC, fields: [id] }) {
      edges {
        node {
          title
          items {
            name
            slogan
            link
            logo {
              childImageSharp {
                fixed(
                  width: 32 height: 32
                ) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
