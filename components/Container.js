import React from 'react'

const Container = props => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center" id="container">{props.children}</div>
        </>
    )
}

export default Container