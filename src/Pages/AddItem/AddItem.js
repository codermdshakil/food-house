import React from 'react';
import createItem from '../../images/create.gif';
import './AddItem.css';


const AddItem = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <h2 className='text-center add-title mb-4'>Add New <span className='title-2'>Item</span> </h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="item-frame" data-aos="fade-right">
                            <img src={createItem} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="create-item-">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;