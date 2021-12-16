import React from 'react'

const Container = props => {
    return (
        <>
            <div className="flex justify-between items-center" id="container">{props.children}</div>
        </>
    )
}

export default Container