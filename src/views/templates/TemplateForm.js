import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { AiOutlineWarning, AiOutlineLoading3Quarters } from 'react-icons/ai'
import SmallFooter from '../../Components/footers/SmallFooter'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import pattern_Bg from '../../assets/img/register_bg_2.png'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {v4} from 'uuid'
import { AuthContext, } from '../../context/AuthContext'

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  

function TemplateForm() {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    // const [tempNum, setTempNum] = useState("")


    const [name, setName] = useState("");
    const [education, setEducation] = useState("");
    const [exp, setExp] = useState("");
    const [projects, setProject] = useState("");
    const [skills, setSkill] = useState("");

    // error states
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error !!!");


    // const handleGenerate = (e) => {
    //     handleDownload();
    // }

    const textState = atom({
        key: 'textState', // unique ID (with respect to other atoms/selectors)
        default: '', // default value (aka initial value)
      });

      const [text, setText] = useRecoilState(textState);
    
    const storage = getStorage();
    const [upload, setUpload] = useState(null)
    const handleUpload = (file) => {
        const storageRef = ref(storage, `${currentUser.email}/${v4()}`);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            alert("Resume Generated ")
            navigate("/profile")
        });
    }



    const handleDownload = () => {
        const input = document.getElementById('finalResume');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("p", "mm", "a4");
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
            const file = pdf.output('blob')
            pdf.save("resume.pdf")
            handleUpload(file)

        }).catch(function (error) {
            console.log(error)
        })
    }





    return (
        <>
            {/* {setTempNum("one")} */}

            <div style={{

                backgroundImage:
                    `url(${pattern_Bg})`,
                backgroundSize: 'cover'
            }}
                className='bg-slate-800 min-h-screen '
            >
                <AuthNavbar />
                <div className="h-fit mt-12 pb-16 bg-none w-[95vw]  flex flex-col md:flex-row mx-auto  bg-no-repeat justify-center ">

                    <div id='form_part' className='bg-none w-full   ' >
                        <div className="mx-auto w-8/12 px-0 h-fit">
                            <div className="flex  content-center items-center justify-center h-fit">
                                <div className="w-full h-fit   px-4">
                                    <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                                        <div className="rounded-t mb-0 px-6 py-6">
                                            <div className="text-center mb-3">
                                                <h6 className="text-slate-500 text-2xl font-bold">
                                                    Enter Your data
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                            <form  >
                                                <div className="flex flex-wrap md:flex-nowrap justify-between gap-2 ">
                                                    <div className="w-full ">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"

                                                            >
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Name" onChange={e => setName(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="flex flex-wrap md:flex-nowrap gap-2">
                                                    <div className="relative w-full  mb-3">
                                                        <label
                                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"

                                                        >
                                                            Skills
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            placeholder="Skills"
                                                            onChange={e => setSkill(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"

                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 invalid:border-red-500 "
                                                        placeholder="Email"
                                                        onChange={e => setEmail(e.target.value)}
                                                    />
                                                </div>

                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"

                                                    >
                                                        Education
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="Education"
                                                        onChange={e => setEducation(e.target.value)}
                                                    />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"

                                                    >
                                                        Projects
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="Projects"
                                                        onChange={e => setProject(e.target.value)}
                                                    />
                                                </div>

                                                <div className="text-center mt-6">
                                                    <NavLink to="">
                                                        <button
                                                            onClick={handleDownload}
                                                            type="submit"
                                                            disabled={loading}
                                                            className="  bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"

                                                        >
                                                            {loading ? <AiOutlineLoading3Quarters className="inline mr-2  text-md animate-spin align-middle  " /> : ""}

                                                            Generate
                                                        </button>
                                                    </NavLink>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full' id='finalResume' >

                        <div className='bg-white w-full h-full px-4' >
                            <div className='text-3xl text-center py-3    ' >

                                Resume template- {text} {/* {tempNum} */}
                                {/* {num} */}
                            </div>
                            <div className="flex flex-col">
                                <p> Name - {name} </p>
                                <p> Education - {education} </p>
                                <p> Email - {email} </p>
                                <p> Experience - {exp} </p>
                                <p> Project - {projects} </p>
                                <p> Skills - {skills} </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <SmallFooter />

        </>
    )
}

export default TemplateForm