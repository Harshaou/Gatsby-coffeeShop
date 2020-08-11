import React from 'react';
import { Link } from "gatsby"
import Title from '../global/Title';


const Info = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <Title title='our story' />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-mutedmb-5">
                        Music for our soul
                        Music is powerful. It can bring us out of 
                        our mind’s darkest places. It is powerful enough to make us believe.
                        It inspires us to keep going when times get tough. It gives us a reason to be happy,
                        and continue our journey. 
                        </p>
                        <Link to='/about'>
                            <button className='btn btn-warning'>About page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;
