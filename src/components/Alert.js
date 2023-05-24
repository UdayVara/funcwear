import React from 'react'

const Alert = (props) => {
    return (
        <>
            <div className={`alert alert-${props.theme} w-100`} role="alert">
                {props.message}
            </div>
        </>
    )
}

export default Alert
