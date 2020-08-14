import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from '../components/global/background'
import Info from '../components/home/Info'
import Menu from "../components/home/Menu"
import Products from "../components/home/Products"
import Contact from "../components/home/Contact"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Background img={data.img.childImageSharp.fluid} title='Regular Joe' styleClass='default-background' />
    <Info route='/about' page='About'/>
    <Menu item={data.menu}/>
    <Products />
    <Contact />
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

  menu: allContentfulCoffeeItem{
    edges {
     node{ 
      id
      title
      description{ description}
      price
      category
      image{
        fixed(width:50,height: 50){
          ...GatsbyContentfulFixed
        }
      }
    }
   }
  }
}
`

export default IndexPage
