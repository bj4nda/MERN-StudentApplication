import axios from 'axios';
import React,{useState, useEffect} from 'react'
import "../App.css"

const Student = () => {
  
    const [contacts, setContacts] = useState([]);
    
    const getContacts = async () => {
        const res = await axios.get('http://localhost:5000/all');
        setContacts(res.data.students)
    }

    useEffect(() => {
        getContacts()
      
    }, [])  
    console.log(contacts)

return (
    <div>

        {contacts.map((val, key) => {
            return <div key={ key}> <h1>{val.name}</h1>   </div>
        })}

       
        
    

    </div>
  )
}

export default Student