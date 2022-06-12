import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import logo1 from "../../assets/images/logo1.png"
import Button from './Button'
// import Switch from './switch/Switch'

function Navbar() {

    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const scrollFn = () => {
            setOffset(window.pageYOffset)
        }
        window.addEventListener('scroll', scrollFn)
    }, [offset])


    const menu = [
        {
            option: "Home",
            link: "/"
        },
        {
            option: "Events",
            link: "/events"
        },
        {
            option: "Gallery",
            link: "/"
        },
        {
            option: "Team",
            link: "/team"
        },

    ]

    const temp = [
        "home", "town", "village",
    ]

    const [click, setClick] = useState(false)


    const handleHamburger = () => {
        if (click === 0) {
            document.getElementById('mobile-menu').classList.add('hidden')
            document.getElementById('mobile-menu').classList.add('visible')
            setClick(1)
        } else {
            document.getElementById('mobile-menu').classList.add('visible')
            document.getElementById('mobile-menu').classList.remove('hidden')
            setClick(0)
        }
    }


    useEffect(() => {
        // window.addEventListener("resize", handleResize)
    })
    return (

        <>

            <nav className=" sticky top-0 z-50 px-2 sm:px-4 py-1.5 h-full bg-orange-500 drop-shadow-md ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <span> <img src={logo} className="mr-3 inline h-24 sm:h-20" alt="Logo" /></span>

                    <button data-collapse-toggle="mobile-menu" type="button" onClick={handleHamburger} className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500  md:hidden hover:bg-gray-100    `} aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className=" justify-stretch  items-center w-full md:flex md:w-auto md:order-1 hidden" id="mobile-menu">
                        <ul className="flex flex-col align-middle text-center md:flex-row md:space-x-6 md:mt-0 md:text-xl md:font-medium">

                            {menu.map((value, index) => {
                                return (
                                    <li key={index} >
                                        <NavLink to={value.link} className="block uppercase py-2 px-1 text-gray-100  "> {value.option} </NavLink>
                                    </li>
                                )
                            })}
                            <div className='w-fit mx-auto lg:mx-0' >
                                <Button text="Login" />
                            </div>
                        </ul>
                    </div>

                </div>
            </nav>


        </>

    )
}

export default Navbar