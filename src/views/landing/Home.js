import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import team from '../../assets/images/resumeBanner.png'
import pattern from '../../assets/images/sharing.png'
import { GiThink, GiTeacher } from 'react-icons/gi'
import { GrWorkshop } from 'react-icons/gr'
import { BsCardChecklist, } from 'react-icons/bs'
import { BiMessageSquareDetail, BiGitRepoForked } from 'react-icons/bi'
import { FaFistRaised, FaChalkboardTeacher } from 'react-icons/fa'
import { AiOutlineBranches, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { MdWorkOutline } from 'react-icons/md'
import ContactForm from './ContactForm'
import { AuthContext } from "../../context/AuthContext"
import SmallFooter from '../../Components/footers/SmallFooter'



function Home() {

    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser.displayName)
    // console.log(currentUser)

    return (
        <>
            <AuthNavbar />
            <section className="header relative  items-center flex h-screen max-h-[660px] md:max-h-[560px] ">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-10">
                        <div className="pt-5 sm:pt-0 z-50 ">
                            <h2 className="font-semibold text-4xl text-slate-600">
                                Resume Builder - Build An Attractive Resume
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-slate-500">
                                Some description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus fugiat autem in fuga. Quam. {" "}

                            </p>
                            <div className="mt-12">
                                <NavLink
                                    to="/template"
                                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-800 active:bg-blue-500  text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                >
                                    Start Building
                                </NavLink>
                                <NavLink
                                    to="/auth/signin"
                                    className=" ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600  text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"

                                >
                                    {!currentUser ? "Login" : "Profile"}

                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-[860px] "
                    src={pattern}
                    alt="..."
                />
            </section>

            <section className="mt-10 md:mt-9 pb-16 relative bg-slate-100">
                <div className="container mx-auto px-4 pb-44 pt-10">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <div className="  text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white text-2xl ">
                                    <BiMessageSquareDetail className='text-slate-900  ' />
                                </div>
                                <h3 className="text-3xl font-semibold">
                                    Why u should Choose us 
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex laudantium, quisquam vero rerum magni! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur similique optio, non deleniti temporibus nulla dolorum odio neque cumque dolores voluptate corrupti. Sapiente, vel accusamus.



                                </p>
                                <ul className="list-none mt-6">
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                                                <GiThink className='inline-block text-slate-900 mr-2 text-2xl' />
                                            </div>
                                            <div>
                                                <h4 className="text-slate-500">
                                                   Reason 1 Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                                                <BsCardChecklist className='inline-block text-slate-900 mr-2 text-2xl' />
                                            </div>
                                            <div>
                                                <h4 className="text-slate-500">
                                                    Reason 2 Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                                                <FaFistRaised className='inline-block text-slate-900 mr-2 text-2xl' />
                                            </div>
                                            <div>
                                                <h4 className="text-slate-500">
                                                    reason 3 Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 mr-auto px-4 pt-16 md:pt-0">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-xl"
                                style={{
                                    transform:
                                        "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                                }}
                                src={team}
                            />
                        </div>
                    </div>
                </div>

   
                {/* <div className="justify-center text-center flex flex-wrap mt-24">
                    <div className="w-full md:w-6/12 px-12 md:px-4">
                        <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
                        <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-500">
                            Notus React is a completly new product built using our past
                            experience in web templates. Take the examples we made for you and
                            start playing with them.
                        </p>
                    </div>
                </div> */}
            </section>

            {/* <section className="block relative z-1 bg-slate-600">
                <div className="container mx-auto">
                    <div className="justify-center flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4  -mt-24">
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Login Page
                                    </h5>
                                    <NavLink to="/auth/login">
                                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src={require("../../assets/img/login.jpg").default}
                                            />
                                        </div>
                                    </NavLink>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Profile Page
                                    </h5>
                                    <NavLink to="/profile">
                                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src={require("../../assets/img/profile.jpg").default}
                                            />
                                        </div>
                                    </NavLink>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Landing Page
                                    </h5>
                                    <NavLink to="/landing">
                                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src={require("../../assets/img/landing.jpg").default}
                                            />
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* call to action */}

            <section className="py-10 bg-slate-600 overflow-hidden pb-40 md:pb-0 ">
                <div className="container mx-auto pb-40">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                            <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <AiOutlineBranches className='inline-block text-slate-900 text-2xl' />
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                                Checkout our Github Repo
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis consequuntur, quisquam sit quibusdam similique eveniet nulla error?
                            </p>

                            <a
                                href="https://github.com/ayusmann/resumeBuilder"
                                target="_blank"
                                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                            >
                                Give us a star
                            </a>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mx-auto  mt-12 relative">
                            < FiGithub className='inline-block w-fit text-white absolute mx-auto text-[300px] lg:text-[500px] opacity-70 ' />

                        </div>
                    </div>
                </div>
            </section>
            


            <section className="py-10 bg-none overflow-hidden">
                <div className="container mx-auto pb-">
                    <div className="flex flex-row-reverse flex-wrap justify-center">
                        <div className="w-full md:px-4 ml-auto mr-auto md:mt-10">

                            <ContactForm />


                        </div>

                        <div className=" hidden px-4 mr-auto ml-auto mt-32 relative">
                            {/* < FiGithub className='inline-block text-white absolute -top-150-px -right-100 left-auto opacity-80 text-[500px] ' /> */}

                        </div>
                    </div>
                </div>
            </section>
            <SmallFooter />

        </>
    )
}

export default Home