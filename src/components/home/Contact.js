import React from 'react';
import Tittle from '../global/Title';

const Contact = () => {
    return (
        <section className='contact py-5'>
            <Tittle title='contact us'/>
            <div className='row'>
                 <div className="col-10 col-sm-8 col-md-6 mx-auto">
                     <form >
                         <div className="form-group">
                             <label htmlFor="name">Name</label>
                             <input type="text" className='form-control'
                             name='name' id='name' placeholder='Harshad'/>
                         </div>
                         <div className="form-group">
                             <label htmlFor="email">Email</label>
                             <input type="text" className='form-control' 
                             name='email' id='email' placeholder='haou@gmail.com'/>
                         </div>
                         <div className="form-group">
                             <label htmlFor="message">Message</label>
                             <textarea type="text" className='form-control'
                             name='message' id='message' rows='5' placeholder='Type you message here...'/>
                         </div>
                         <button className='btn btn-yellow btn-block text-capitalize mt-5 ' type='submit'>Submit</button>
                     </form>
                 </div>
            </div>
        </section>
    );
}

export default Contact;
