import React, { useEffect, useState } from 'react';
import MyItem from '../MyItem/MyItem';
import usePageTitle from '../../hooks/usePageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [allMyItems, setAllMyItems] = useState([]); 
    useEffect(() => {
        const email = user.email;
        const url = `https://calm-waters-38040.herokuapp.com/myitems?email=${email}`;
        fetch(url, {
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllMyItems(data)) 
    }, [user])




    const handleMyitemDelete = id => {
        const confirmationMessage = window.confirm('Are you sure to delete this item?');
        if (confirmationMessage) {
            const url = `https://calm-waters-38040.herokuapp.com/myitem/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const newProducts = allMyItems.filter(item => item._id !== id);
                    setAllMyItems(newProducts)
                })
        }
    }


    return (
        <div className='mt-5 pt-5'>
            {
                usePageTitle('My Items')
            }
            <div className="container">
                <h3 className='text-center py-3 mb-3'>My Item's <span style={{ color: 'red' }}>({allMyItems.length})</span>  </h3>
                <div className="row">
                    {
                        allMyItems.map(item => <MyItem key={item._id} item={item} handleMyitemDelete={handleMyitemDelete}> </MyItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;