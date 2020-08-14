import React from 'react';
import Img from 'gatsby-image'

const Product = ({product}) => {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{minHeight: '100%'}}>
                <Img className='card-img-top' fluid={product.image.fluid} />
                <div className="card-body text-center">
                    <h6>{product.title} </h6>
                    <h6>${product.price} </h6>
                    <button className='btn btn-yellow text-capitalize mt-3 snipcart-add-item'
                    data-item-id={product.id}
                    data-item-name={product.title}
                    data-item-price={product.price}
                    data-item-image={product.image.fluid.src}
                    data-item-url="https://modest-jennings-4715e4.netlify.app" >
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Product;
