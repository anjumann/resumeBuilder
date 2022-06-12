import React, { useState, useEffect } from 'react'
import Button from '../BasicComponents/Button';

function Contact() {
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

            const res = await fetch("https://ihacka-thon-default-rtdb.firebaseio.com/userData.json",
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

            <form className='text-left' method='POST' >
                <div className="relative z-0 w-full mb-6 group ">
                    <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " value={Msg.name} onChange={postMsg} required="" />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Name</label>
                </div>

                <div className="relative z-0 w-full mb-6 group ">
                    <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " value={Msg.email} onChange={postMsg} required="" />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Email address</label>
                </div>

                <div className="relative z-0 w-full mb-6 group ">
                    <textarea rows="4" cols="50" name="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none          focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " value={Msg.message} onChange={postMsg} required="" />
                    <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Message</label>
                </div>



                <button
                    onClick={submitData}
                    type="submit"
                    className="bg-white text-slate-700 active:bg-slate-50 text-md font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none  lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    
                >
                    {/* <FaTeamspeak className='inline text-slate-900 mr-2 text-lg' /> */}
                    Send
                </button>


            </form>
        </>
    )
}

export default Contact