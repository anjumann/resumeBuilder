import { Zoom } from 'react-awesome-reveal'
import { BiError } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineCelebration } from 'react-icons/md'

function RegModal({ name, type, closeModal }) {

    const navigate = useNavigate()

    const handleClick = () => {
        closeModal(false);

    }

    return (

        <>

            <div onClick={() => closeModal(false)} className='backdrop-blur-sm h-[100vh] fixed top-0 right-0 left-0 z-[999] w-screen'>
                <Zoom as="div" duration={200} className='flex flex-col h-[100vh] justify-center items-center fixed top-0 right-0 left-0 z-[999] w-[100vw] '>
                    <div className="overflow-y-auto overflow-x-hidden w-fit z-50 md:inset-0 h-modal md:h-full mx-auto my-auto">
                        <div className="relative p-4 w-full  max-w-lg h-full md:h-auto">
                            <div className="relative bg-gray-50 min-w-md  rounded-lg shadow ">
                                <div className='p-8' >
                                    {type === "submit" ? <MdOutlineCelebration className='text-7xl text-black w-fit mx-auto' /> : <BiError className='text-7xl text-red-500 w-fit mx-auto' />
                                    }


                                </div>
                                <div className=' text-gray-800 text-md w-fit mx-auto text-center px-10 ' >
                                    {type === "submit" ? (`Congrats... ${name} your application is submited`) : "Error !!! Fill the field careFully "
                                    }
                                </div>
                                <div className="p-6 w-fit mx-auto gap-4 flex text-center">

                                    {type !== "submit" ? <button type="button" className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" onClick={() => handleClick} >
                                        Okay
                                    </button> : <Link to="/">
                                        <button type="button" className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" onClick={() => handleClick} >
                                            Go to Home
                                        </button>

                                    </Link>}



                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    )
}

export default RegModal