import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Tittle from '../global/Title';
import Product from './product';

const Products = () => {

    const getProducts = graphql`
    {
        products: allContentfulCoffeeProduct{
          edges{
            node{
              id
              title
              price
              image{
                 fluid(maxHeight: 426){
                  src
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }      
    `
    return (
        <div>
            <StaticQuery query={getProducts} render={({products}) => {
                return (
                    <section className='py-5'>
                      <div className="container">
                        <Tittle title='Our products' />
                        <div className="row">
                          {products.edges.map(({node}) => {
                            return (
                              <Product key={node.id} product={node} />
                            )
                          })}
                        </div>
                      </div>
                    </section>
                )
            }} />
            
        </div>
    );
}

export default Products;
