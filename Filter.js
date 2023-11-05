import React, { useState } from 'react'
import style from './Filter.module.css'

const Filter = ({filteration}) => {
    const [filter, setFilter] = useState("");

    const handleSearch = (e) => {
        const name = e.target.value;
        setFilter(name);
        filteration(name);

    }
    return (
        <div className="input-div">

            <input className="input" type="text" placeholder="Search For Developers" value={filter} onChange={handleSearch} />
        </div>
    )
}

export default Filter
