import React, {useState} from 'react';
import FeatherIcon from 'feather-icons-react';
import { TextField } from '@mui/material';

import './Study.css';
import {System} from "../Backend/System.js";

async function SendSearch(search){
    console.log(search); // send search to database
    let result = await System.showTutors(search);
}

function Study() {
    const [search, setSearch] = useState('');

    return (
        <div className='study'>
            <h1 className='study-title'>how can we <b>help?</b></h1>
            <div className='study-container'>
                <FeatherIcon className='study-search-icon' icon='search'/>
                <TextField className='study-fill' label="enter course name: " variant="standard" onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <button className='study-submit' onClick={() => SendSearch(search)}>search</button>
        </div>
    )
}

export default Study