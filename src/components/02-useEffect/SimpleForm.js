import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

   const [formstate, setFormstate] = useState({
      name:'',
      email:'',
   });

   const {name,email}=formstate;

   useEffect(()=>{
      // console.log('Hey!');
   },[]);
   
   useEffect(()=>{
      // console.log('formstate cambio');
   },[formstate]);
   
   useEffect(()=>{
      // console.log('email cambio');
   },[email]);

   const handleInputChange=({target})=>{
      // e.preventDefault(); 
      // console.log(target.name);
      // console.log(target.value);
      setFormstate({
         ...formstate,
         [target.name]:target.value,
      })
   }


  return (
    <>
      <h1>useEffect</h1>
      <hr/>
      <div className='form-group'>
         <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
         >
         </input>
      </div>
      <div className='form-group'>
         <input
            type='text'
            name='email'
            className='form-control'
            placeholder='email@gmail.com'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
         >
         </input>
      </div>

      {(name ==='123')&&<Message/>}

    </>
  )
}
