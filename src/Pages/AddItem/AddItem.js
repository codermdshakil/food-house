import React from 'react';
import createItem from '../../images/create.gif';
import './AddItem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';



const AddItem = () => {

    const [user, loading] = useAuthState(auth);

    
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve));

    if (loading) {
        return <LoadingSpinner />
    }

    // handle add item to server 
    const handleAddItem = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const img = e.target.photoUrl.value;
        const price = parseInt(e.target.price.value);
        const sold = parseInt(e.target.sold.value);
        const quantity = parseInt(e.target.quantity.value);
        const email = e.target.email.value;
        const supliername = e.target.suplier.value;
        const description = e.target.description.value;
        const newItem = { name, img, price, quantity, email, supliername, description, sold };
        console.log(newItem)
     

        fetch('http://localhost:5000/products', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        e.target.reset();
        toast.promise(
            resolveAfter3Sec,
            {
              success: `New ${name} item added`,
            }
        )
    }


    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <h2 className='text-center add-title mb-5 py-2'>Add New <span className='title-2'>Item</span> </h2>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-10 col-11 d-block m-auto">
                        <article className="item-frame" data-aos="fade-right">
                            <img src={createItem} className='img-fluid mb-3' alt="" />
                        </article>
                    </div>
                    <div className="col-lg-6 col-md-10 col-11 d-block m-auto">
                        <div className="create-item-box" data-aos="fade-left">
                            <h3 className='pb-3 px-2'>Item Information</h3>
                            <form onSubmit={handleAddItem}>
                                <article className="form-box">
                                    <input type="text" name="name" placeholder='Name' required /> <br />
                                    <input type="url" name='photoUrl' placeholder='Photo url' required /> <br />
                                    <input type="number" name="price" placeholder='Price' required /> <br />
                                    <input type="number" name='sold' placeholder='Sold' required /> <br />
                                    <input type="number" name="quantity" placeholder='Quantity' required /> <br />
                                    <input type="email" name='email' value={user?.email} disabled readOnly /> <br />
                                    <input type="text" name='suplier' placeholder='Suplier name' required /> <br />
                                    <textarea name="description" placeholder='Description here..' rows="3" required></textarea> <br />
                                    <button type='submit'>Add Item <FontAwesomeIcon icon={faArrowRight} /></button>
                                </article>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;