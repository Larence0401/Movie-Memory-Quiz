import React from 'react'

const Wrapper = props => {
    return (
        <>
            <div className="bg-idigo-500 h-screen flex flex-col">{props.children}</div>
        </>
    )
}

export default Wrapper
