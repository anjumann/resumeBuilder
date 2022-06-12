import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { AiOutlineLoading3Quarters, AiOutlineWarning } from 'react-icons/ai'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase'

function ResetPassword() {


    const [email, setEmail] = useState("");

    // error states

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error !!!");

    // loading state
    const [loading, setLoading] = useState(false);


    const handleReset = (e) => {
        e.preventDefault();
        setLoading(true);

        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                alert("check Inbox reset link is sent");
                setError(false);
                setLoading(false);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                setError(true);
                if (errorCode === "auth/user-not-found") {
                    setErrorMessage("user not found")
                }
                if (errorCode === "auth/missing-email") {
                    setErrorMessage("Enter your Email")
                }
                setLoading(false);
            });

    }



    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-slate-500 text-sm font-bold">
                                        Forget Password
                                    </h6>
                                </div>
                            </div>

                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                <form  >
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>


                                    <div className={` ${error ? "flex" : "hidden"}  justify-center `} >
                                        <AiOutlineWarning className='inline text-red-600 text-xl mr-2 my-auto' />
                                        <p className='text-center text-red-600' >  {errorMessage} </p>
                                    </div>
                                    <div className="text-center mt-6">
                                        <NavLink to="">
                                            <button
                                                onClick={handleReset}
                                                type="submit"
                                                className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            >
                                                {loading ? <AiOutlineLoading3Quarters className="inline mr-2  text-md animate-spin align-middle  " /> : ""}
                                                Sign In
                                            </button>
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <NavLink
                                    to="/auth/signin"

                                    className="text-slate-200"
                                >
                                    <small> Sign in</small>
                                </NavLink>
                            </div>
                            {/* <div className="w-1/2 text-right">
                                <NavLink to="/auth/signup" className="text-slate-200">
                                    <small>New User? Create new account</small>
                                </NavLink>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword