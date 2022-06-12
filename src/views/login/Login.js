import { useState } from 'react'
import pattern_Bg from '../../assets/img/register_bg_2.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import { Outlet} from "react-router-dom";
import SmallFooter from '../../Components/footers/SmallFooter'
import { } from 'react-router-dom'


function Login() {
    const pathname = window.location.pathname


    return (
        <>
            <div style={{

                backgroundImage:
                    `url(${pattern_Bg})`,
                backgroundSize: 'cover'
            }}
                className='bg-slate-800 min-h-screen '
            >
                <AuthNavbar />
                <div className="h-fit mt-12 pb-10 bg-none flex bg-no-repeat  ">

                    <Outlet/>
                </div>
            </div>
            <SmallFooter/>
        </>
    )
}

export default Login