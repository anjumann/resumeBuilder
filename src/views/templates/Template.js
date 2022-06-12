import React from 'react'
import pattern_Bg from '../../assets/img/register_bg_2.png'
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import SmallFooter from '../../Components/footers/SmallFooter'
import template1 from '../../assets/images/template.png'
import template2 from '../../assets/images/template2.png'
import { useNavigate } from 'react-router-dom'


import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  

function Template() {

    const navigate = useNavigate()

    const handleChangeTemplateOne = () => {
        console.log("template 1");
        setText(1)
        navigate("/resumePreview")
        
    }
    const handleChangeTemplateTwo = () => {
        console.log("template 2");
        setText(2)
        navigate("/resumePreview")
    }

    const textState = atom({
        key: 'textState', // unique ID (with respect to other atoms/selectors)
        default: '', // default value (aka initial value)
      });
    const [text, setText] = useRecoilState(textState);


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
                <div className="h-fit mt-12 pb-16 bg-none flex flex-col bg-no-repeat  ">
                <div className='text-white w-fit mx-auto mb-16 text-6xl font-bold' >
                    Templates 
                </div>
                    <div className='max-w-3xl flex mx-auto space-x-16  ' >
                        <div className='hover:scale-110 transition-all duration-300 hover:rounded-lg hover:text-black text-white  ease-in hover:backdrop-blur-sm hover:bg-white cursor-pointer '
                        
                        onClick={handleChangeTemplateOne  }

                        
                        >
                            <img className='w-72  ' src={template1} alt="" />
                            <p className='w-fit mx-auto pt-2 pb-3 font-semibold' >Template - 1</p>
                        </div>
                        <div className='hover:scale-110 transition-all duration-300 hover:rounded-lg hover:text-black text-white  ease-in hover:backdrop-blur-sm hover:bg-white cursor-pointer ' 
                            onClick={handleChangeTemplateTwo}
                        >
                            <img className='w-72  ' src={template2} alt="" />

                            <p className='w-fit mx-auto pt-2 pb-3  font-semibold' >Template - 2</p>
                        </div>
                    </div>


                </div>
            </div>
            <SmallFooter />
        </>
    )
}

export default Template