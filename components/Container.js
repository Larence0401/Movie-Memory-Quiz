import React from 'react'

const Container = props => {
    return (
        <>
            <div className="bg-indigo-200 flex justify-between items-center">{props.children}</div>
        </>
    )
}

export default Container
