import React from "react"
import { graphql } from "gatsby"
import List from "../components/List"

function PageTemplate({ data }) {
  return (
    <List data={data} />
  )
}

export default PageTemplate

export const query = graphql`
  query($id: String!) {
    page: agencyYaml(id: { eq: $id }) {
      id
      name
      items {
        name
        location
        slogan
        link
        logo {
          childImageSharp {
            fixed(
              width: 32
              height: 32
            ) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`