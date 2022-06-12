import React, { useState, useEffect, useContext } from 'react'
import profilePic from '../../assets/member/core/johnWick.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import { AuthContext, } from '../../context/AuthContext'
import { getUserInfo, db } from '../../firebase'
import { NavLink } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";


// icons
import { AiOutlineUser, AiOutlineMail, AiOutlineBranches, AiOutlineEdit } from 'react-icons/ai'
import SmallFooter from '../../Components/footers/SmallFooter'
import CardTable from '../../Components/DashboardComp/cards/CardTable'


// name: `${user ? user.displayName : "Name" }`,

function Profile() {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)

  // const docRef = doc(db, "users", currentUser.uid);




  const handleName = () => {
    if (currentUser.displayName) {
      return currentUser.displayName;
    }
    else {
      return currentUser.email;
    }

  }




  const [name, setName] = useState(`${currentUser.displayName ? currentUser.displayName : currentUser.email}`);
  const [email, setEmail] = useState(`${currentUser.email ? currentUser.email : "Email"}`);

  const [Url, setUrl] = useState([]);

  // const upload = () => {
  //   if (image == null)
  //     return;
  //   setUrl("Getting Download Link...")


  //       // Getting Download Link
  //       storage.ref(`${currentUser.email}`).getDownloadURL()
  //         .then((url) => {
  //           setUrl(...url);
  //         })
     
  // }


  useEffect(() => {
    if (currentUser) {
      getUserInfo(currentUser.uid)
        .then((members) => {
          // setMembers(...members);

          setName(members.name);
          setEmail(members.email);
          console.log(members.name);
        })
        .catch((e) => {
        });
    }
  }, [currentUser]);




  const info = {
    name: name,

    email: email,


  }



  return (
    <>
      <AuthNavbar />
      {/* {console.log(currentUser.uid)} */}
      <main className="profile-page">
        <section className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-no-repeat "
            style={{
              backgroundImage:
                // `url(${bgPic})`,
                "url('https://images.unsplash.com/photo-1653076362668-a717e53fe8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')",
            }}
          >

          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              {/* <polygon
                      className="text-slate-200 fill-current"
                      points="2560 0 2560 100 0 100"
                    ></polygon> */}
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-slate-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={profilePic}
                        className="shadow-2xl backdrop-blur-[1.5px] rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <NavLink to="/template" >
                        <button
                          className="bg-sky-500 active:bg-sky-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          {/* <AiOutlineEdit className="inline-flex mb-1 text-lg font-extrabold mr-3" /> */}
                          Add Resume
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">

                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700 ">
                    {info.name}
                  </h3>



                  {/*  */}
                  <div className='mt-10 text-left  max-w-fit mx-auto ' >

                    <div className=" text-slate-600 ">
                      <AiOutlineMail className="inline-flex mb-1  mr-1" />
                      Email - {info.email}
                    </div>

                  </div>

                </div>
                <div className="mt-10 py-10 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="px-4 md:px-10 mx-auto w-full m-5">
                      <CardTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SmallFooter />

    </>
  )
}

export default Profile