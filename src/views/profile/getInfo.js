import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { db } from '../../firebase'
import { AuthContext } from "../../context/AuthContext"
import pattern_Bg from '../../assets/img/register_bg_2.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import { doc, setDoc } from "firebase/firestore";
import SmallFooter from '../../Components/footers/SmallFooter'



// components

export default function GetInfo() {


    const [name, setName] = useState("");
    const [usn, setUsn] = useState("");
    const [phone, setPhone] = useState("");
    const [branch, setBranch] = useState("");
    const [intro, setIntro] = useState("");


    const navigate = useNavigate();
    // const { dispatch } = useContext(AuthContext)

    // error states
    // const [error, setError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("Error !!!");

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
            phone: phone,
            branch: branch,
            intro: intro,

        });
        navigate("/profile")
    }



    return (
        <>
            <div div style={{

                backgroundImage:
                    `url(${pattern_Bg})`,
                backgroundSize: 'cover'
            }}
                className='bg-slate-800 '

            >
                <AuthNavbar />

                <div className="w-10/12 md:w-1/2 mx-auto flex flex-col min-w-0 break-words shadow-lg rounded-lg bg-slate-100 border-0
                mt-10 h-fit mb-6  ">
                    <div className="rounded-t  mb-0 px-6 py-6">
                        <div className="text-center flex flex-wrap flex-col md:flex-row justify-center md:justify-between space-y-2 ">
                            <h6 className="text-slate-700 text-xl font-bold">My account</h6>

                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                        <form>
                            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
                                User Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
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
                                            placeholder="Name" onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="branch"
                                        >
                                            Branch
                                        </label>
                                        {/* <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                        /> */}
                                        <select
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            onChange={e => setBranch(e.target.value)}
                                        >
                                            <option value="">--Select Branch--</option>
                                            <option value="CSE">CSE</option>
                                            <option value="Information Science Enginnering.">Information Science Enginnering.</option>
                                            <option value="ECE">ECE</option>
                                            <option value="AIML">AIML</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            USN
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase "
                                            placeholder="USN" onChange={e => setUsn(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="9876543210"
                                            onChange={e => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-slate-300" />



                            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
                                About Me
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            About me
                                        </label>
                                        <textarea
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Write Something yourSelf"
                                            rows="4"

                                            onChange={e => setIntro(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex flex-wrap justify-center   md:flex-row " >


                                <button
                                    className="bg-slate-700 text-white  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mx-3 my-3 md:my-0"
                                    type="button"
                                    onClick={handleGetInfo}
                                >
                                    Update
                                </button>

                                <NavLink to="/profile">
                                    <button
                                        className="bg-white text-slate-700  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mx-3 my-3 md:my-0"
                                        type="button"
                                    >
                                        Cancel
                                    </button>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='h-10' >

                </div>
            </div>
            <SmallFooter/>
        </>
    );
}
