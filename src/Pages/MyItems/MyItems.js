import React, { useEffect, useState } from 'react';
import MyItem from '../MyItem/MyItem';
import usePageTitle from '../../hooks/usePageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate} from 'react-router-dom';
import {  signOut } from 'firebase/auth';
import axiosSecret from '../../api/axiosSecret';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';


const MyItems = () => {

    const [user, loading] = useAuthState(auth);
    const [allMyItems, setAllMyItems] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {

        const getallMyItems = async() => {
            const email = user?.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            try{
                const {data} = await axiosSecret.get(url)
                setAllMyItems(data)
            }
            catch (error){
                console.log(error)
                if(error.message || error.response.status === 401 || error.response.status === 401){
                    console.log('hello world')
                    signOut(auth)
                    navigate('/signin')
                }
            }
        }
        getallMyItems();

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

    if(loading){
        return <LoadingSpinner/>
    }

    return (
        <div className='mt-5 pt-5'>
            {/* {
                usePageTitle('My Items')
            }        */}
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