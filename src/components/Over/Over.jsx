import React, {useState} from 'react';
import FeatherIcon from 'feather-icons-react';
import { TextField } from '@mui/material';

import './Over.css';

function SendSearch(search){
    console.log(search); // send search to database
}

function Over() {
    const [search, setSearch] = useState('');

    return (
        <div className='over'>
            <h1 className='over-title'>support is <b>here.</b></h1>
            <div className='over-container'>
                <FeatherIcon className='over-search-icon' icon='search'/>
                <TextField className='over-fill' label="enter course name: " variant="filled" multiline={true} minRows={5} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <button className='over-submit' onClick={() => SendSearch(search)}>search</button>
        </div>
    )
}

export default Over