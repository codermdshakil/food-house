import React from 'react';
import createItem from '../../images/create.gif';
import './AddItem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';



const AddItem = () => {

    const [user, loading] = useAuthState(auth);

    if(loading){
        return <LoadingSpinner/>
    }

    
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <h2 className='text-center add-title mb-5 py-2'>Add New <span className='title-2'>Item</span> </h2>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-10 col-11 d-block m-auto">
                        <div className="item-frame" data-aos="fade-right">
                            <img src={createItem} className='img-fluid mb-3' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 col-11 d-block m-auto">
                        <div className="create-item-box">
                            <h3 className='pb-3 px-2'>Item Information</h3>
                            <form>
                                <div className="form-box">
                                    <input type="text" name="name" placeholder='Name' required /> <br />
                                    <input type="url" name='photo-url' placeholder='Photo url' required /> <br />
                                    <input type="number" name="price" placeholder='Price' required /> <br />
                                    <input type="number" name='sold' placeholder='Sold' required /> <br />
                                    <input type="number" name="quantity" placeholder='Quantity' required /> <br />
                                    <input type="email" name='email' value={user?.email} disabled readOnly /> <br />
                                    <input type="text" name='suplier' placeholder='Suplier name' /> <br />
                                    <textarea name="description" placeholder='Description here..' rows="3" required></textarea> <br />
                                    <button type='submit'>Add Item <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;