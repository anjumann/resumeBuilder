import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiTechnoHeart } from 'react-icons/gi'

const SmallFooter = (props) => {
    const main = [{
        item: "Home",
        link: "/",
    },
    {
        item: "Login",
        link: "/signin",
    },
    {
        item: "Other Links",
        link: "/",
    }]

    const pathname = window.location.pathname

    return (
        <>
            <footer
                className={
                    (props.absolute
                        ? "absolute w-full bottom-0 bg-none"
                        : (pathname === "/admin/dashboard" ? "hidden" : "relative")) + " pb-6"
                }

            >
                <div className="container mx-auto px-4">
                    <hr className="mb-6 border-b-1 border-slate-600" />
                    <div className="flex flex-wrap items-center flex-col md:flex-row  md:justify-between justify-center">
                        <div className=" px-4">
                            <div className="text-sm text-black font-semibold py-1 text-center">
                                Copyright © {new Date().getFullYear()}{" "}
                                <NavLink
                                    to="/"
                                    className="text-black hover:text-slate-700 text-sm font-semibold py-1"
                                >
                                    Resume Builder
                                </NavLink>
                            </div>
                        </div>
                        <div>

                            Created with <GiTechnoHeart className=" inline text-red-700 " /> by <a href='/' > Anjuman </a>
                        </div>
                        <div className="  px-4">


                            <ul className="flex flex-wrap list-none ">
                                {main.map((index, key) => {
                                    return (
                                        < >
                                            <li key={key} >
                                                <NavLink
                                                    to={index.link}
                                                    className="text-black hover:text-slate-600 text-sm font-semibold block py-1 px-3"
                                                >
                                                    {index.item}
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SmallFooter