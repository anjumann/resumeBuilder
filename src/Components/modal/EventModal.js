import React from 'react'
import { Zoom } from "react-awesome-reveal"
import { ImCross } from "react-icons/im"

function EventModal(props) {
    return (
        <>

            <div onClick={() => props.closeModal(false)} className='backdrop-blur-sm h-[100vh] fixed top-0 right-0 left-0 z-[999] w-screen'>
                <Zoom as="div" duration={200} className='flex flex-col h-[100vh] justify-center items-center fixed top-0 right-0 left-0 z-[999] w-[100vw]'>
                    <div onClick={(e) => e.stopPropagation()} id="extralarge-modal" tabIndex="-1" className=" overflow-y-auto   md:inset-0  flex items-center justify-center justify-items-center overflow-x-hidden  ">
                        <div className="relative p-4 w-full max-w-7xl h-full md:h-auto backdrop-lg  shadow-lg  border-0  " >
                            {/* <!-- Modal content --> */}
                            <div className="relative bg-blend-color  shadow  bg-clip-padding backdrop-blur  bg-opacity-90 bg-slate-900 rounded-2xl p-4 ">
                                {/* <!-- Modal header --> */}
                                <div className="flex flex-wrap justify-between items-center p-3 md:p-4   border-b ">
                                    <div className=''>
                                        <h3 className="text-xl md:text-3xl font-bold  text-gray-100 "  >
                                            {props.name}
                                        </h3>
                                    </div>
                                    <button type="button" className="text-gray-100  gap-1 text-md p-1.5 ml-auto inline-flex items-center " data-modal-toggle="extralarge-modal"
                                        onClick={() => { props.closeModal(false) }} >

                                        <ImCross className=" inline" />
                                    </button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div className="overflow-y-scroll sm:overflow-y-auto  h-[80vh] sm:h-auto p-1 sm:flex sm:flex-row md:flex md:flex-row  ">

                                    
                                        <img src={props.src} alt={""} className=" " />
                                    
                                    <div className="align-middle px-2 md:p-10 pt-4   space-y-6  sm:overflow-y-scroll   sm:h-[75vh] md:h-full">
                                        <div>
                                            <div className="py-3 text-gray-100 text-4xl bold"> <span className='font-bold'>Events Details </span>
                                                <br />

                                            </div>

                                            <div className=" text-gray-100"> <span className='font-semibold' >Name - </span> {props.name}</div>

                                            <div className=" text-gray-100">  <span className='font-semibold' >Category - </span> {props.category}</div>
                                            <div className=" text-gray-100">  <span className='font-semibold' >Date - </span>  {props.date}  </div>
                                            <div className=" text-gray-100">  <span className='font-semibold' >Attended by - </span>  {props.attended}  </div>
                                            <div className=" text-gray-100">  <span className='font-semibold' >Oragnizer - </span>  {props.oragnizer}  </div>
                                        </div>
                                        <div className="">

                                            <h1 className="text-gray-100/100 text-4xl font-bold py-3">Description</h1>
                                            <p className=" text-base leading-relaxed text-gray-100 ">
                                                {props.desp}

                                            </p>
                                        </div>

                                        <div className='p-3'></div>
                                    </div>
                                </div>
                                {/* <!-- Modal footer --> */}
                                {/* <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">

                            <button data-modal-toggle="extralarge-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-100 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    )
}

export default EventModal