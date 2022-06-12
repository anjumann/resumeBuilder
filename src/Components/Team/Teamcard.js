import React from 'react'
import { FaGithub, FaInstagram } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { Fade } from 'react-awesome-reveal'
import "./team.css"
function Teamcard(props) {
    return (
        <>
            <Fade style={{

                backgroundImage:
                    `url(${props.bgImage})`,
                    
                backgroundSize: 'cover'
            }} className="shadow-2xl bg-no-repeat  hover:shadow-gray-900 hover:shadow-2xl transition duration-300 max-w-sm scale-90 lg:scale-100 h-full text-center w-[80%] lg:w-[20%] m-5 rounded-md">
                <div className="transition-transform hover:scale-[1.15]  duration-300">
                    <div className="bg-none border-0 rounded-xl h-60 pt-0 ">
                        <img className=" object-cover h-60 w-fit m-auto " src={props.src} alt="" />
                    </div>
                    <div className="text-center h-32 bg-white  p-2">
                        <h1 className="pt-2  font-semibold text-xl text-gray-900 tracking-wide">
                            {props.name}
                        </h1>
                        <h3 className="pt-2 pb-4 text-sm text-slate-400 font-semibold tracking-wider">
                            {props.role}
                        </h3>
                        <div className="flex justify-center gap-7 mb-2">
                            <a href={props.github}>

                                <FaGithub className="  text-black hover:text-gray-600 cursor cursor-pointer   transition-all ease-in-out  text-2xl " />
                            </a>

                            <a href={props.linkedin}>
                                <FiLinkedin className="  text-black hover:text-gray-600 cursor-pointer  transition-all ease-in-out text-2xl " />
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Teamcard