import React from 'react'
import {Checkbox} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './Terms.css';



function Terms() {
    const navigate = useNavigate();

    return (
        <div className='terms'>
            <div className='terms-text-box'>
                <div className='terms-text'>To keep our community safe, friendly, and sustainable, we ask you to give away a little when you are assisted. It could be a snap of your cutest poppy, or a picture of a beautiful sunset in your hometown. It could also be a funny story, a piece of gossip, or a bubble tea invitation. Remember, the helper who devotes his/her time to assist you is also a student. We appreciate all the effort our helpers voluntarily offer, and want to make sure all the effort they have been put into helping you study is credited. Thank you in advance for making our community a warm and friendly one.</div>
            </div>
            <div className='terms-check'>
                <div className='terms-checkbox'>
                    <Checkbox />
                    <p className='terms-check-text'>i have read the terms and conditions.</p>
                </div>
                <button className='terms-check-btn' onClick={() => navigate('/question-asked')}>i agree</button>
            </div>
        </div>
    )
}

export default Terms