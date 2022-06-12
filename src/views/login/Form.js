import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import google_icons from '../../assets/img/google.svg'
import github_icons from '../../assets/img/github.svg'
import { AiOutlineWarning, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { signInWithEmailAndPassword } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider, providerGithub } from '../../firebase'
import { AuthContext } from "../../context/AuthContext"
import { signOut } from "firebase/auth";



function Form() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)
    const { currentUser } = useContext(AuthContext)

    //error states
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error !!!");
    //loading
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({ type: "SIGNIN", payload: user })
                console.log(user);
                // alert("login successful");
                navigate("/admin/dashboard")
                setError(false);
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(errorCode);

                setError(true);
                // console.log(errorMessage);
                if (errorCode === "auth/user-not-found") {
                    setErrorMessage("user not found")
                }
                if (errorCode === "auth/invalid-email") {
                    setErrorMessage("Invalid Email")
                }

                if (errorCode === "auth/wrong-password") {
                    setErrorMessage("Wrong password")
                }
                if (errorCode === "auth/internal-error") {
                    setErrorMessage("Enter password")
                }

                setLoading(false);
            });
    }

    const handleSignOut = (e) => {       
            signOut(auth).then(() => {

                // Sign-out successful.
                console.log("signout is successfull");
                dispatch({ type: "SIGNOUT", payload: null })

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error in signing out");
                console.log(errorCode);
                // An error happened.
            });
        
    }

    const handleGoogleAuth = (e) => {
        e.preventDefault();
        

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token);
                // The signed-in user info.
                const user = result.user;
                dispatch({ type: "SIGNIN", payload: user })  
                // navigate("/admin/profile")
                navigate("/template")
                // if (user.email==="ayusmann23@gmail.com") {
                // }
                // else{
                //     handleSignOut();
                // }
                console.log(user.email);


                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode);
                console.log(email);
                console.log(credential);
                // ...
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
                                        Sign in with
                                    </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <button
                                        className="bg-white active:bg-slate-50 text-slate-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                    // onClick={handleGithubAuth}
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={github_icons}
                                        />
                                        Github
                                    </button>
                                    <button
                                        className="bg-white active:bg-slate-50 text-slate-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleGoogleAuth}
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={google_icons}
                                        />
                                        Google
                                    </button>
                                </div>
                                <hr className="mt-6 border-b-1 border-slate-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-slate-400 text-center mb-3 font-bold">
                                    <small>Or sign in with credentials</small>
                                </div>
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

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                            onChange={e => setPassword(e.target.value)}
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
                                        <p className='text-center text-red-600' >  {errorMessage} </p>
                                    </div>


                                    <div className="text-center mt-6" >
                                        <NavLink to="">
                                            <button
                                                onClick={handleLogin}
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
                                    to="/auth/resetpassword"
                                    // onClick={(e) => e.preventDefault()}
                                    className="text-slate-200"
                                >
                                    <small>Forgot password?</small>
                                </NavLink>
                            </div>
                            <div className="w-1/2 text-right">
                                <NavLink to="/auth/signup" className="text-slate-200">
                                    <small>Create new account</small>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form