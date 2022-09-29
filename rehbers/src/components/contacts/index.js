import {useState, useEffect} from 'react'
import './styles.css'
import List from './List'
import Form from './Form'


function Contacts() {
    const [contacts, setContatcs]= useState([]);

    useEffect(()=>{
        console.log(contacts)
    },[contacts])
  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContacts={setContatcs} contacts={contacts}/>
        
    </div>
  )
}

export default Contacts