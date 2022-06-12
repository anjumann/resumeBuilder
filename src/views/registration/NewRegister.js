import { useState } from 'react'
import pattern_Bg from '../../assets/img/register_bg_2.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'

import SmallFooter from '../../Components/footers/SmallFooter'
import NewEntries from './NewEntries'



function NewRegister() {
    const pathname = window.location.pathname

    // cosnt [pathname, setPathname] =useState(window.location.pathname)

    return (
        <>
            <div style={{

                backgroundImage:
                    `url(${pattern_Bg})`,
                backgroundSize: 'cover'
            }}
                className='bg-slate-800 min-h-screen'
            >
                <AuthNavbar />
                <div className="h-fit bg-none flex bg-no-repeat  ">
                   <NewEntries/>
                </div>
            </div>
            <SmallFooter/>
        </>
    )
}

export default NewRegister