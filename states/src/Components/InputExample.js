import React, { useState } from 'react'

function InputExample() {
    const [form, setForm]= useState({name :"", surname:""})
    const OnchangeInput = (e)=>{
        setForm({...form, [e.target.name]: e.target.value })
    }
  return (
    <div>
        Name
        <br/>
        <input name="name" value={form.name} onChange={OnchangeInput} />
        <br/>

        Surname
        <br/>
        <input name="surname" value={form.surname} onChange={OnchangeInput} />
        <br/>
        
        {form.name} {form.surname}
    </div>
  )
}

export default InputExample