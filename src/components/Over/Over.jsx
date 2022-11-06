import React, {useState} from 'react';
import FeatherIcon from 'feather-icons-react';
import { TextField } from '@mui/material';
import word from '../../assets/words.png';

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
                <div className='over-box'>
                    <img src={word} alt='words' className='over-box-img'/>
                </div>
            </div>
        </div>
    )
}

export default Over