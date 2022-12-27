import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import "../App.css"
axios.defaults.withCredentials = true
let firstRender = true;

export default function AddStudent() {
    const [user, setUser] = useState();
    
    const refreshToken = async () => {
        const res = await axios.get('https:localhost:5000/auth/refresh', {
            withCredentials: true,
        }).catch((err) => {
            console.log(err);
            const data = res.data;
})
    }

    const getStudent = async() => { 
        const res = await axios.get('http://localhost:5000/auth/user' , {
            withCredentials: true
        }).catch(err => console.error(err)); 
        const data = await res.data;
        return data
    };

    useEffect(() => {
        if(firstRender) {
            firstRender = false;
            getStudent().then((data) => setUser(data.user))
        }
        let interval = setInterval(() => {
            refreshToken().then((data) => setUser(data))
        }, 1000 * 300)

        return ()=> clearInterval(interval)   
    }, []);
  return (
      <div>
        {user && <h1>{user.name}</h1>}
      </div>
  );
}

