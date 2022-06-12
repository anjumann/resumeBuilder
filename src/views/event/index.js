import React from 'react'
import Eventcard from './Eventcard'
import Tab from './Tab'
import {eventData} from "./eventData"
import AuthNavbar from '../../Components/navbars/AuthNavbar'
import SmallFooter from '../../Components/footers/SmallFooter'


function Events() {
  return (
    <>
    <AuthNavbar/>

    <div className='text-7xl text-center text-gray-800 pt-5 font-bold tracking-widest ' >Events</div>
    <div className='text-3xl text-center text-gray-600 pt-3 pb-8   tracking-widest ' >Something that make sense</div>

    <Tab/>

    <div className='flex flex-wrap w-[95vw] m-auto mt-0 justify-center ' >
      {eventData.map((events, id)=>{
        return(
          <Eventcard key={id} 
          name={events.name} 
          src={events.image}
          date={events.date}
          category={events.type} 
          attended={events.attended}
          oragnizer={events.oragnizer}
          desc={events.desc}
          />
        )
      } )}
    </div>
      <SmallFooter/>
    </>
  )
}

export default Events