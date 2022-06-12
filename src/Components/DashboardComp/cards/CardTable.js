import React, { useState,useContext, useEffect } from "react";
import PropTypes from "prop-types";
import src from '../../../assets/member/core/johnWick.png'
import { db } from "../../../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { AuthContext, } from '../../../context/AuthContext'

// components

import TableDropdown from "../Dropdowns/TableDropdown";
import { data } from "autoprefixer";

export default function CardTable({ color }) {
  
  const { currentUser } = useContext(AuthContext);

  // const [data,setData] = useState([{}])
  const [members, setMembers] = useState([]);
  
  // const temp = [];
  const fetchMembers = async () => {
    
    const querySnapshot = await getDocs.collection("user")
    .where("uid", "==", currentUser.uid).get();
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data().name);
      setMembers((e)=>[...e,doc.data()])
    });
    


  }

  console.log(members.length)
  
  
  
  
  useEffect(() => {
    // setData(fetchMembers())
    fetchMembers()
    // setMembers(fetchMembers());
    
  }, [])
  // console.log(members);
  
  
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-sky-900 text-white")
        }
        >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-slate-700" : "text-white")
                }
                >
                Resume ( {members.length} )
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center  w-full bg-transparent border-collapse ">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                    ? "bg-slate-50 text-slate-500 border-slate-100"
                    : "bg-sky-800 text-sky-300 border-sky-700")
                  }
                  >
                  xyz
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                    ? "bg-slate-50 text-slate-500 border-slate-100"
                    : "bg-sky-800 text-sky-300 border-sky-700")
                  }
                  >
                  Link
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                    ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-sky-800 text-sky-300 border-sky-700")
                  }
                  >
                  Download
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                    ? "bg-slate-50 text-slate-500 border-slate-100"
                    : "bg-sky-800 text-sky-300 border-sky-700")
                  }
                >
                  QR code link
                </th>

              </tr>
            </thead>



            <tbody>

               {members.map((index, id)=>{
                return(
                  <tr key={id} >
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src={src}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                        ></img>{" "}
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light" ? "text-slate-600" : "text-white")
                        }
                      >
                        {index.name}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {index.usn}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                       {index.phone}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {index.email}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <TableDropdown />
                    </td>
                  </tr>
                )
              })} 





            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

