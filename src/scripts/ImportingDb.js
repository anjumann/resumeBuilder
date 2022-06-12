import React, { useState, useContext } from 'react'
import { db } from '../firebase'
import { data } from './csvjson'
import { doc, setDoc } from "firebase/firestore";


function ImportingDb() {

    const updateData = (e) => {
        e.preventDefault();

        data.map( async (index, id) => {
            e.preventDefault();
            await setDoc(doc(db, "members", index.usn), {
                name: index.name,
                usn: index.usn.toUpperCase(),
                email: index.email,
                phone: index.phone,
            })
            console.log((id+1) + "data transfer" + index.usn  )
        })

    }

    // const handleUpdateInfo = async (e) => {
    //     e.preventDefault();
    //     await setDoc(doc(db, "members", currentUser.uid), {
    //         name: name,
    //         usn: usn,
    //         uid: currentUser.uid,
    //         email: currentUser.email,
    //         emailVerified: currentUser.emailVerified,
    //         phone: phone,
    //         branch: branch,
    //         intro: intro,

    //     })
    // }



    return (
        <>
            <h1 className='text-5xl text-center' >data is here</h1>
            <div>
                <button 
                // onClick={updateData}
                className=' block w-fit mx-auto  border-2 bg-black text-white px-4 py-2 ' >
                    initiate data transfer
                </button>

            </div>
        </>
    )
}

export default ImportingDb