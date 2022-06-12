import React from 'react'

function Button(props) {
    return (

        <button type="button" className="py-2 px-4  bg-white hover:border-x-4 hover:border-org hover:drop-shadow-lg  text-org w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg  ">
            {props.text}
        </button>

    )
}

export default Button



