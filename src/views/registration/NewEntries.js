import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import google_icons from '../../assets/img/google.svg'
import github_icons from '../../assets/img/github.svg'
import { AiOutlineWarning, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db, auth, provider } from '../../firebase'
import { AuthContext } from "../../context/AuthContext"
import { doc, setDoc } from "firebase/firestore";
import RegModal from './RegModal'




function NewEntries() {

    // firebase google auth
    const [loading, setLoading] = useState(false);
    // const [password, setPassword] = useState("123456");
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)

    const [name, setName] = useState("");
    const [usn, setUsn] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [branch, setBranch] = useState("");
    const [intro, setIntro] = useState("");
    const [openModal, setModal] = useState(false);
    const [openErrModal, setErrModal] = useState(false);

    // error states
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error !!!");

    useEffect(() => {
        const handleEscapePress = (e) => {
            if (e.key === "Escape") {
                setModal(false);
            }
        };
        window.addEventListener("keydown", handleEscapePress);

        return () => window.removeEventListener("keydown", handleEscapePress);
    }, []);



    const handleSubmission = async (e) => {
        setLoading(true)
        e.preventDefault();

        if (name && usn && phone && branch) {
            await setDoc(doc(db, "coreMembers", usn), {
                name: name,
                usn: usn.toUpperCase(),
                email: email,
                phone: phone,
                branch: branch,
                timeStamp: Date() ,
            })
            setLoading(false)
            console.log("data recorded" + usn)
            setModal(true)
            
        } else {
            setLoading(false)
            setErrModal(true)

        }
    }


    return (
        <>
            <div className="container mx-auto px-4 h-fit">
                <div className="flex content-center items-center justify-center h-fit">
                    <div className="w-full h-fit py-7 lg:w-5/12  px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h1 className="text-slate-500 text-5xl font-bold">
                                        Join us
                                    </h1>
                                </div>

                                <hr className="mt-6 border-b-1 border-slate-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-slate-400 text-center mb-3 font-bold">
                                    <small>Just a step away</small>
                                </div>
                                <form  >
                                    <div className="flex flex-wrap md:flex-nowrap justify-between gap-2 ">
                                        <div className="w-full lg:w-6/12 ">
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
                                        <div className="w-full lg:w-6/12 ">
                                            <div className=" w-full mb-3">
                                                <label
                                                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                    htmlFor="branch"
                                                >
                                                    Branch
                                                </label>

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
                                    </div>
                                    <div className="flex flex-wrap md:flex-nowrap gap-2">
                                        <div className="relative w-full lg:w-6/12 mb-3">
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

                                        <div className=" w-full lg:w-6/12 mb-3">
                                            <label
                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Phone"
                                                onChange={e => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            College Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            onChange={e => setEmail(e.target.value)}
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

                                    <div className="text-center mt-6 space-y-2  ">

                                        <button
                                            onClick={handleSubmission}
                                            disabled={loading || openModal}
                                            
                                            className={`bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 ${(loading || openModal) ? "cursor-not-allowed" : ""} `}
                                            
                                            >
                                            {loading ? <AiOutlineLoading3Quarters className="inline mr-2  text-md animate-spin align-middle  " /> : ""}

                                            {loading ? "Submiting " : " Submit"}

                                        </button>

                                        <button
                                            
                                            disabled={loading || openModal}
                                            type='reset'

                                            className={`bg-gray-50 text-gray-700 active:bg-slate-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 ${loading ? "cursor-not-allowed" : ""} `}

                                        >
                                            {/* {loading ? <AiOutlineLoading3Quarters className="inline mr-2  text-md animate-spin align-middle  " /> : ""} */}

                                            Reset

                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {openModal && <RegModal name={name} type="submit" closeModal={setModal} />}
            {openErrModal && <RegModal name={name} type="error" closeModal={setErrModal} />}
        </>
    )
}

export default NewEntries