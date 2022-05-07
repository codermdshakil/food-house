import { useEffect, useState } from 'react';
import axios from 'axios';

const useJwtToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {

        const getJwtToken = async () => {
            console.log(user)
            const email =user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://calm-waters-38040.herokuapp.com/gettoken', { email });
                setToken(data.token);
                localStorage.setItem('token', data.token);
            }
        }
        getJwtToken();
    }, [user])

    return [token];
}

export default useJwtToken;
