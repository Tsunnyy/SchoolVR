import React from 'react'

const SuccessMsg = ({ props }) => {
    return (
        <div>
            <div className="successText text-center">
                {props.title ? <h4>{props.title}</h4> : ""}
                {props.msg ? <p>{props.msg}</p> : ""}
                {props.btn ? <button className='btn btn-outline m-auto'>Book a Demo</button> : ""}
            </div>
        </div>
    )
}

export default SuccessMsg