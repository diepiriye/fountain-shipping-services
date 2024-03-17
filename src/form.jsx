import { useState } from "react"
import React, { useRef } from 'react'

export default function Form(){
    const [formInfo, setFormInfo] = useState(
        {name: '', email: '', phoneNumber: '', message:''}
    )
    const form = useRef();
    
    console.log(formInfo)

    function handleChange(e){
        setFormInfo(formInfo =>{
            return{...formInfo, [e.target.name]: e.target.value,}
        })
    }
    function sendMail(e){
        e.preventDefault();
        console.log(form.current)
        window.open("mailto:diepiriyeariel@gmail.com?subject=A%new%message&body="+encodeURI(form.current.message));
    
        /*emailjs.sendForm('service_noc7mkr', 'template_jboy1z8', form.current, 'jicK3ER7wCIgP4A6P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          handleReset()*/
      };

    return(
        <div className="form-container">
            <form className="forms" ref={form} onSubmit={sendMail}>
                <div className="input-container">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" name="name" id="name" 
                        placeholder="Name" onChange={handleChange}
                        value={formInfo.name}
                        required
                    />
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" name="email" id="email" 
                        placeholder="E-mail" onChange={handleChange}
                        value={formInfo.email}
                        required
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="tel" name="phoneNumber" id="phone-number" 
                        placeholder="Phone Number" onChange={handleChange}
                        value={formInfo.phoneNumber}
                        required
                    />
                </div>
                <div className="message-container">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" id="message" cols="30" rows="10" 
                        placeholder="message" onChange={handleChange}
                        value={formInfo.message}
                    />
                    <button className="btn">SEND</button>
                </div>
            </form>
        </div>
    )
}