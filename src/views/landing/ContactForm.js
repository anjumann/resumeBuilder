import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import google_icons from '../../assets/img/phone.png'
import github_icons from '../../assets/img/gmail.png'
import { BsTelephoneForward } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

function ContactForm() {

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

    const resetMsg = () => {
        

        setMsg({ ...Msg, [name]: "" });
    };

    // firebase connection

    const submitData = async (events) => {
        events.preventDefault();
        const { name, email, message } = Msg;

        if (name && email && message) {

            const res = await fetch("https://ihacka-thon-default-rtdb.firebaseio.com/userMsg.json",
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
                // {resetMsg()}
                
            }
            else {
                alert("Failed to Submit message");
            }
        }
        else {
            alert("Fill all the field");


        }

    }


    return (
        <>
            <div className="mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full md:w-8/12  lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-slate-500 text-sm font-bold">
                                        Contact Us
                                    </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <a href="tel:8861643971">

                                        <button
                                            className="bg-white active:bg-slate-50 text-slate-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={google_icons}
                                            />
                                            Call us
                                        </button>
                                    </a>
                                    <a href="mailto:finiteloopclub@gmail.com">

                                        <button
                                            className="bg-white active:bg-slate-50 text-slate-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={github_icons}
                                            />
                                            Mail us
                                        </button>
                                    </a>
                                </div>
                                <hr className="mt-6 border-b-1 border-slate-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-slate-400 text-center mb-3 font-bold">
                                    <small>Or Message us</small>
                                </div>
                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text" name="name"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Name" value={Msg.name} onChange={postMsg} required=""
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email" name="email"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email" value={Msg.email} onChange={postMsg} required=""
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            value={Msg.message} onChange={postMsg} required="" placeholder="Message"
                                        />
                                    </div>
                                    {/* <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-slate-600">
                                                Remember me
                                            </span>
                                        </label>
                                    </div> */}

                                    <div className="text-center mt-6">

                                        <button
                                            onClick={submitData}
                                            type="submit"
                                            className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            
                                        >
                                            Submit
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm