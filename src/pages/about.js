import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from '../components/global/background'
import Info from '../components/home/Info'


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <Background img={data.img.childImageSharp.fluid} title='About us' styleClass='about-background' />
    <Info />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: 
    "about-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
} 
`

export default AboutPage
