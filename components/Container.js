import React from 'react'

const Container = props => {
    return (
        <>
            <div id="container" className="flex justify-between items-center" id="container">{props.children}</div>
        </>
    )
}

export default Container