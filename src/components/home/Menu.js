import React, {useEffect} from 'react';
import Tittle from '../global/Title';
import { useState } from 'react';
import Img from 'gatsby-image'


const Menu = ({item}) => {
    const [items, setItems] = useState(item.edges);
    const [coffeeItems, setCoffeeItems] = useState(item.edges);
    const [catagories, setCatagories] = useState([])


    useEffect(() => {
        getCatagories()
    }, []);

    const getCatagories = () => {
        let tempItems = coffeeItems.map(item => {
            return item.node.category
        })

        let tempCatagories = new Set(tempItems)
        let ArrCatagories = Array.from(tempCatagories)
        setCatagories(['all', ...ArrCatagories])
    }

    const handleSorting = (item) => {
        let tempItems = [...items]
        if(item === 'all'){
            setCoffeeItems(tempItems)           
        } else if (item === 'juice'){
             setCoffeeItems(tempItems.filter(({node}) => node.category === 'juice')) 
        } else if(item === 'tea'){
             setCoffeeItems(tempItems.filter(({node}) => node.category === 'tea')) 
        } else if(item === 'coffee'){
             setCoffeeItems(tempItems.filter(({node}) => node.category === 'coffee'))  
        }
    }
    

    if(item.edges.length > 0){
        return (
            <div className="menu py-5">
                <div className="container">
                    <Tittle title='best of our menu' />
                    <div className='row mb-5'>
                    <div className="col-10 mx-auto text-center">
                        {catagories.map((item, index) => {
                            return (
                                <button key={index}
                                type='button' 
                                className='btn btn-yellow text-capitalize m-3'
                                onClick={() => handleSorting(item)} >
                                    {item}
                                </button>
                            )
                        })}
                    </div>
                    </div>
                    <div className="row">
                        {coffeeItems.map(({node}) => {
                            return (
                                <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto" >
                                     <div>
                                         <Img fixed={node.image.fixed} />
                                     </div>
                                     <div className="flex-grow-1 px-3">
                                         <div className="d-flex justify-content-between">
                                             <h6 className='mb-0'><small>{node.title}</small> </h6>
                                             <h6 className='mb-0 text-yellow'><small>${node.price}</small> </h6>
                                         </div>
                                         <p className="text-muted">
                                            <small>{node.description.description} </small>
                                         </p>
                                     </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <section className="menu py-5">
                <div className="container">
                    <Tittle title="best of our menu" />
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                            <h1>there are no items to display</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Menu;
