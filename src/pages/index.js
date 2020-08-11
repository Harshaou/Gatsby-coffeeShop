import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from '../components/global/background'
import Info from '../components/home/Info'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Background img={data.img.childImageSharp.fluid} title='Regular Joe' styleClass='default-background' />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: 
    "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
