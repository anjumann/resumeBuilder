import React from 'react'
import Btn from '../BasicComponents/Btn';
import Button from '../BasicComponents/Button';
import Contact from './Contact';
import AuthNavbar from '../navbars/AuthNavbar';
import { NavLink } from 'react-router-dom';
import hero from "./png/programmer.png"
import events from "./png/events.png"
import join from "./png/join.png"
import laravel from "./png/laravel.png"
import contact from "./png/contact.png"
import { Fade, Slide, Zoom } from "react-awesome-reveal";


const testimonials = [
    {
        name: "Rahul S",
        testimonials: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        role: "SDE @Sony",
        img: "/team/team2021/rahul s.jpeg"

    },
    {
        name: "Rahul S",
        testimonials: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        role: "SDE @Sony",
        img: "/team/team2021/rahul s.jpeg"

    },
    {
        name: "Rahul S",
        testimonials: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        role: "SDE @Sony",
        img: "/team/team2021/rahul s.jpeg"

    },
    {
        name: "Rahul S",
        testimonials: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        role: "SDE @Sony",
        img: "/team/team2021/rahul s.jpeg"

    },
    {
        name: "Rahul S",
        testimonials: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        role: "SDE @Sony",
        img: "/team/team2021/rahul s.jpeg"

    },
    {
        name: "Rahul S",
        testimonials: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        role: "SDE @Sony",
        img: "/team/team2021/rahul s.jpeg"

    },
    {
        name: "Rahul S",
        testimonials: "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        role: "SDE @Sony",
        img: "/team/team2021/rahul s.jpeg"

    },
]

function Home() {
    return (
        <>
            <AuthNavbar/>
            <div style={{ textAlign: 'center' }}>

                {/* get started */}

                <div className='h-full '>
                    <div className='flex flex-col lg:flex-row justify-center items-center ' >
                        <Slide direction="left" className='p-8 lg:p-16 mx-auto w-full lg:w-1/2 text-center lg:text-left ' >
                            <div  >
                                <div className='text-org text-5xl font-extrabold py-7 ' >Welcome to FinteLoop </div>
                                <div className='text-gray-900' >Finite Loop is a Coding Club, which aims to give a good perspective of development, and encourages students to realize their ideas. We encourage students to participate in competitive programming and thus, inspire the next.
                                </div>
                                <div className='my-5 w-fit mx-auto lg:mx-0' >
                                    <NavLink to="/register" >
                                        <Btn text="Join us" />
                                    </NavLink>
                                </div>
                            </div>
                        </Slide>

                        <Slide direction="right" className='w-full   lg:w-1/2 flex justify-center ' >
                            <img className='self-center ' src={hero} alt="" />
                        </Slide>
                    </div>
                </div>

                {/* working on trending tech */}

                <div className='h-full '>
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center ' >
                        <Slide direction="left" className='w-full   lg:w-1/2 flex justify-center ' >

                            <img src={laravel} height="500px" alt="" />

                        </Slide>
                        <Slide direction="right" className='p-8 lg:p-16 mx-auto w-full lg:w-1/2 text-center lg:text-left ' >
                            <div  >
                                <div className='text-org text-5xl font-extrabold py-7 ' >Work with us on  trending Technology </div>
                                <div className='text-gray-900' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque assumenda voluptate iusto, deleniti aliquam ullam magnam, totam ea error ad fugiat quaerat optio praesentium impedit
                                </div>

                            </div>
                        </Slide>


                    </div>
                </div>

                {/* events  */}

                <div className='h-full '>
                    <div className='flex flex-col lg:flex-row justify-center items-center ' >
                        <Slide direction="left" className='p-8 lg:p-16 mx-auto w-full lg:w-1/2 text-center lg:text-left ' >
                            <div  >
                                <div className='text-org text-5xl font-extrabold py-7 ' > We r organising events regularly </div>
                                <div className='text-gray-900' >Finite Loop is a Coding Club, which aims to give a good perspective of development, and encourages students to realize their ideas. We encourage students to participate in competitive programming and thus, inspire the next.
                                </div>
                                <div className='my-5 w-fit mx-auto lg:mx-0' >
                                    <NavLink to="/events">
                                    <Btn text="Explore Events" />
                                    </NavLink>
                                </div>
                            </div>
                        </Slide>

                        <Slide direction="right" className='w-full   lg:w-1/2 flex justify-center ' >
                            <img className='self-center h-72 ' src={events} alt="" />
                        </Slide>
                    </div>
                </div>

                {/* join us */}

                <div className='h-full '>
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center ' >
                        <Slide direction="left" className='w-full   lg:w-1/2 flex justify-center ' >

                            <img src={join} height="500px" alt="" />

                        </Slide>
                        <Slide direction="right" className='p-8 lg:p-16 mx-auto w-full lg:w-1/2 text-center lg:text-left ' >
                            <div  >
                                <div className='text-org text-5xl font-extrabold py-7 ' >Why you should Join us</div>
                                <div className='text-gray-900 items-center px-2' >
                                    <ul className='list-outside list-disc text-justify ' >
                                        <li className=" py-1  " >we providing this Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio commodi nostrum? </li>
                                        <li className=" py-1  " >we providing this too Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio commodi nostrum? </li>
                                        <li className=" py-1  " >we providing this  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio commodi nostrum?</li>
                                        <li className=" py-1  " >we providing this too Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio commodi nostrum? </li>
                                    </ul>
                                    <div className='my-5 w-fit mx-auto lg:mx-0' >
                                    <NavLink to="/register">
                                        <Btn text="Join us" />
                                    </NavLink>
                                    </div>

                                </div>

                            </div>
                        </Slide>


                    </div>
                </div>


                {/* call to action  */}

                <section className="bg-gradient   bg-none py-8 md:py-16">
                    <div className="max-w-5xl  mx-auto px-5 box-content">

                        <div className="flex items-center flex-col md:flex-row -mx-5">
                            <div className="w-full px-5 mb-5 md:mb-0 text-center md:text-left">
                                <h6 className="uppercase font-semibold text-xs md:text-base text-org ">
                                    Upcoming Event
                                </h6>
                                <h3 className="font-bold font-heading text-2xl md:text-4xl text-gray-900">
                                    Github Session
                                </h3>
                                <h3 className="font-bold font-heading text-md md:text-xl text-gray-600 leading-tight">
                                    @CPP lab 2pm-4pm
                                </h3>
                                <div className="mt-4 w-full md:w-44">
                                    <a target="_blank" href="https://forms.gle/Qni5T6EBcjrnksUc6" >
                                        <Button text="Register Now" />
                                    </a>
                                </div>
                            </div>

                            <div className="w-full md:w-auto px-5">
                                <div className="flex justify-center text-org text-center">
                                    <div className="w-20 md:w-24 border border-org border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                        <div className="text-2xl md:text-3xl font-semibold">
                                            <span>
                                                0
                                            </span>
                                            <span>
                                                1
                                            </span>
                                        </div>
                                        <div className="opacity-75 text-xs mt-3 uppercase">
                                            Day
                                        </div>
                                    </div>
                                    <div className="w-20 md:w-24 border border-org border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                        <div className="text-2xl md:text-3xl font-semibold">
                                            <span>
                                                1
                                            </span>
                                            <span>
                                                8
                                            </span>
                                        </div>
                                        <div className=" opacity-75 text-xs mt-3 uppercase">
                                            Hour
                                        </div>
                                    </div>
                                    <div className="w-20 md:w-24 border border-org border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                        <div className="text-2xl md:text-3xl font-semibold">
                                            <span>
                                                5
                                            </span>
                                            <span>
                                                0
                                            </span>
                                        </div>
                                        <div className=" opacity-75 text-xs mt-3 uppercase">
                                            Min
                                        </div>
                                    </div>
                                    <div className="w-20 md:w-24 border border-org border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                        <div className="text-2xl md:text-3xl font-semibold">
                                            <span>
                                                1
                                            </span>
                                            <span>
                                                9
                                            </span>
                                        </div>
                                        <div className=" opacity-75 text-xs mt-3 uppercase">
                                            Second
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* testimonials */}
                <Zoom>
                    <div className="text-5xl font-bold text-gray-800">Testimonials</div>
                </Zoom>
                <div className="w-10/12 mx-auto flex flex-wrap flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8 justify-center  ">
                    {testimonials.map((test, key) => {
                        return (
                            <Fade>
                                <div key={key} className="bg-white hover:shadow-2xl w-72 shadow-lg mx-auto transition-al duration-200 hover:scale-105 rounded-xl p-4">
                                    <p className="text-gray-700 ">
                                        <span className="font-bold text-org/75 text-lg">
                                            “
                                        </span>
                                        {test.testimonials}
                                        <span className="font-bold text-org/75 text-lg">
                                            ”
                                        </span>
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <a href="/" className="block relative">
                                            <img alt="profil" src={test.img} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </a>
                                        <div className="flex flex-col ml-2 justify-between">
                                            <span className="font-semibold text-indigo-500 text-sm">
                                                {test.name}
                                            </span>
                                            <span className="dark:text-gray-400 text-xs flex items-center">
                                                {test.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        )
                    })
                    }

                </div>

                {/*contact us*/}
                <div className='h-full '>
                    <div className='flex flex-col lg:flex-row justify-center items-center ' >
                        <Slide direction="left" className='w-full   lg:w-1/2 flex justify-center ' >

                            <img src={contact} height="500px" alt="" />

                        </Slide>
                        <Slide direction="right" className='p-8 lg:p-16 mx-auto w-full lg:w-1/2 text-center lg:text-left ' >
                            <div  >
                                <div className='text-org text-5xl font-extrabold py-7 ' >
                                    Get in touch with us
                                </div>
                                <div className='text-gray-900 text-lg' >
                                    We'd love to hear from you!
                                </div>
                                <div className="flex space-x-6 justify-center lg:justify-start pb-6">
                                    <div className="mt-4 w-44">
                                        <Button text="Mail us " />
                                    </div>
                                    <div className="mt-4 w-44">
                                        <Button text="Make a Call" />
                                    </div>
                                </div>
                                or

                                <div className='py-5' >
                                    <Contact />
                                </div>

                            </div>
                        </Slide>


                    </div>
                </div>



                {/* 404 page  */}

                {/*
                
                <div className="h-screen w-screen bg-gray-50 flex items-center">
                    <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                        <div className="w-full lg:w-1/2 mx-8">
                            <div className="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
                            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                                Sorry we couldn't find the page you're looking for
                            </p>

                            <a href="/"
                                className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">back
                                to homepage</a>
                        </div>
                        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                            <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
                                className="" alt="Page not found"/>
                        </div>

                    </div>
                </div>

 */}









                {/* Gallery */}
                {/* <Parallax className='h-[80vh] ' bgImage={require('./img/gallery.jpg')} bgImageStyle={{ objectFit: 'cover ', backgroundPosition: "left" }} strength={-200} >
                    <div style={{ height: 500, }} >
                        <div style={inlineStyleRD} className='w-screen'>
                            <div className='text-white font-bold  text-4xl  md:text-6xl' style={{ textShadow: "2px 2px 15px #000000" }} >See us through Images</div>
                            <br />
                            <p style={{ textShadow: "2px 2px 15px #000000" }} className='font-normal text-white py-2 text-2xl md:text-3xl font-body'>Lorem ipsum dolor sit amet consectetur.</p>

                            <NavLink to="/gallery">   <Button text="Gallery" />   </NavLink>
                        </div>
                    </div>
                </Parallax> */}





            </div>


        </>
    )
}

export default Home