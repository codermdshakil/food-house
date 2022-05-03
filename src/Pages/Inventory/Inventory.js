import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {

    const { inventoryId } = useParams();

    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <p>this is update inventory : {inventoryId}</p>
            </div>
        </div>
    );
};

export default Inventory;