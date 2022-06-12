import React, { useState, useEffect } from 'react'
import Button from '../BasicComponents/Button';

function Registration() {
    const [Msg, setMsg] = useState({
        name: "",
        email: "",
        message: "",
        
    })

    let name, value;
    const postMsg = (event) => {
        name = event.target.name;
        value = event.target.value;

        setMsg({ ...Msg, [name]: value });
    };

    // firebase connection

    const submitData = async (events) => {
        events.preventDefault();
        const { name, email, message } = Msg;

        if (name && email && message) {

            const res = await fetch("https://ihacka-thon-default-rtdb.firebaseio.com/newResigered.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                    }),
                }
            );

            if (res) {
                alert("Submitted to DB");
            }
            else {
                alert("Failed to Submit message");
            }
        }
        else {


        }

    }

    return (
        <>

            <div className=' text-5xl md:text-7xl my-5 text-center text-gray-800 pt-5 font-bold tracking-widest underline decoration-orange-500 underline-offset-8 decoration-4 ' >Registration</div>
            <div className='text-xl lg:text-3xl text-center text-gray-600 pt-3 pb-8 tracking-widest ' > Just one step away from being member of club </div>
            <div className="w-7/12 my-8 mx-auto">
                <form className='text-left' method='POST' >
                    <div className="relative z-0 w-full mb-6 group ">
                        <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " value={Msg.name} onChange={postMsg} required="" />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Name</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group ">
                        <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " value={Msg.email} onChange={postMsg} required="" />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Email address</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group ">
                        <textarea rows="4" cols="50" name="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " value={Msg.message} onChange={postMsg} required="" />
                        <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">What are Your expections from us </label>
                    </div>


                    <button type="submit" className="mt-4 w-44" onClick={submitData} >
                        <Button text="Submit" />
                    </button>

                </form>
            </div>
        </>
    )
}

export default Registration