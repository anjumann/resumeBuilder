import React from 'react'
import error from './Home/png/pagenotfound.png'
import Button from './BasicComponents/Button'
import AuthNavbar from './navbars/AuthNavbar'
import { NavLink } from 'react-router-dom'
import SmallFooter from './footers/SmallFooter'

function Error() {
    return (
        <>
            <AuthNavbar />
            <div className="h-[80vh] w-11/12 mx-auto flex items-center">
                <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                    <div className="w-full lg:w-1/2 mx-8">
                        <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                            Sorry we couldn't find the page you're looking for
                        </p>
                        <div className='mt-4 w-44 md:w-44' >
                            <NavLink to="/">
                                <Button text="Back to Home" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                        <img src={error} className="" alt="Page not found" />
                    </div>

                </div>
            </div>
        <SmallFooter/>
        </>
    )
}

export default Error