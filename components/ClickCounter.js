import React from 'react'

const ClickCounter = ({clicks}) => {
    const clickText = clicks === 1 ? clicks + " click" : clicks + " clicks"
    return (
        <div className='text-white text-4xl px-4 pt-16 text-center uppercase'>
                {clicks > 0 && clickText}
        </div>
    )
}

export default ClickCounter
