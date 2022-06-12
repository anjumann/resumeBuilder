import React from 'react'
import "./switch.css"

function Switch() {
    return (
        <label className="switch">
            <input className='switch_input' type="checkbox"/>
                <span className="slider"></span>
        </label>
    )
}

export default Switch