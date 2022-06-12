import React, { useState, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineWarning, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { db } from '../../firebase'
import { AuthContext } from "../../context/AuthContext"
import pattern_Bg from '../../assets/img/register_bg_2.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import { doc, setDoc } from "firebase/firestore";








function Info() {

    // firebase google auth

    const [name, setName] = useState("");
    const [usn, setUsn] = useState("");


    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)

    // error states
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error !!!");

    const { currentUser } = useContext(AuthContext)

    const handleGetInfo = async (e) => {
        e.preventDefault();

        console.log(currentUser.uid);
        await setDoc(doc(db, "members", currentUser.uid), {
            name: name,
            usn: usn,
            uid: currentUser.uid,
            email: currentUser.email,
            emailVerified: currentUser.emailVerified,

        });
        navigate("/profile")


    }



    const pathname = window.location.pathname

    // cosnt [pathname, setPathname] =useState(window.location.pathname)

    return (
        <>
            <div style={{

                backgroundImage:
                    `url(${pattern_Bg})`,
                backgroundSize: 'cover'
            }}
                className='bg-slate-800'
            >
                <AuthNavbar />
                <div className="h-screen bg-none flex bg-no-repeat  ">
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                                    <div className="rounded-t mb-0 px-6 py-6">
                                        <div className="text-center mb-3">
                                            <h6 className="text-slate-500 text-sm font-bold">
                                                Enter Your Details
                                            </h6>
                                        </div>

                                        <hr className="mt-6 border-b-1 border-slate-300" />
                                    </div>
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                                        <form  >
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Name"
                                                    onChange={e => setName(e.target.value)}
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    USN
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="USN"
                                                    onChange={e => setUsn(e.target.value)}
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


                                            <div className={` ${error ? "flex" : "hidden"}  justify-center `} >
                                                <AiOutlineWarning className='inline text-red-600 text-xl mr-2 my-auto' />
                                                <p className='text-center text-red-600' > {errorMessage} </p>
                                            </div>

                                            <div className="text-center mt-6">
                                                
                                                    <button
                                                        onClick={handleGetInfo}
                                                        type="submit"
                                                        // disabled={loading}
                                                        className="  bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

                                                    >
                                                        {/* {loading ? <AiOutlineLoading3Quarters className="inline mr-2  text-md animate-spin align-middle  " /> : ""} */}

                                                        Register
                                                    </button>
                                                
                                                <NavLink to="/profile">
                                                    <button
                                                        
                                                        
                                                        // disabled={loading}
                                                        className="  bg-white text-slate-800 active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

                                                    >
                                                        {/* {loading ? <AiOutlineLoading3Quarters className="inline mr-2  text-md animate-spin align-middle  " /> : ""} */}

                                                        Cancel
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Info