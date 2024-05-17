import React, { useState } from 'react'
import '../Style/contact.css'
import axios from 'axios';

const ContactUs = () => {

    const url = 'https://sheet.best/api/sheets/5ecee373-a622-49c6-9d7b-c5402a62a9e3'

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name,email,number,query);              

        const data = {
            Name: name,
            Email: email,
            Number: number,
            Query: query,
        }
        axios.post(url, data).then((response) => {
            // console.log(response);

            setName('');
            setEmail('');
            setNumber('');
            setQuery('');
        })
    }





    return (

        <>

            <form action="" autoComplete='off' className='form-group' onSubmit={handleSubmit}>
                <label htmlFor="">Name</label> <br />
                <input type="text" placeholder='Enter Your Name' required className='form-control'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <br />

                <label htmlFor="">Email</label><br />
                <input type="text" placeholder='Enter Your Email' required className='form-control'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}

                />

                <br />


                <label htmlFor="">Mobile Num</label>  <br />
                <input type="text" placeholder='Enter Your Mobile Number' required className='form-control'
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}

                />

                <br />


                <label htmlFor="">Any Query</label><br />
                <input type="text" placeholder='Enter Your Query' required className='form-control'
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}

                /><br />

                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>


        </>

    )
}

export default ContactUs