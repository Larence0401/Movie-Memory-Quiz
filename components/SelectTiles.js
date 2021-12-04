import React from 'react'
import Select from 'react-select'

const options = [
    { value: '12', label: '12' },
    { value: '16', label: '16' },
    { value: '20', label: '20' }
  ]
const SelectTiles = () => {
    return (
        <div>
            <Select options={options} />
        </div>
    )
}

export default SelectTiles
