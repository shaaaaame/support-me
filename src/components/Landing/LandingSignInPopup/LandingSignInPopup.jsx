import React, {useState} from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import './LandingSignInPopup.css';
import {login} from '../../../Database.js'


function LandingSignInPopup(props) {
	const [mail, setMail] = useState('');
	const [pass, setPass] = useState('');

	const handleMailChange = (e) => {
		setMail(e.target.value);
	}	
	
	const handlePassChange = (e) => {
		setPass(e.target.value);
	}		

	const handleSubmit = async (e) => {
		console.log("request if data valid: " + mail + ' ' + pass) //request validation from andy
	}

	return (
		<div className='landing-signin-popup'>
			<div className='landing-signin-cover'></div>
			<div className='landing-signin-box'>
				<FeatherIcon className='landing-signin-exit' icon='x' onClick={props.exit}/>
				<div className='landing-signin-container'>
					<h2 className='landing-signin-popup-title'>sign in</h2>
					<p className='landing-signin-popup-label'>email:</p>
					<input className='landing-signin-popup-fill' type="text" onChange={handleMailChange} />
					<p className='landing-signin-popup-label'>password:</p>
					<input className='landing-signin-popup-fill' type="text" onChange={handlePassChange} />
					<button className='landing-signin-popup-submit' onClick={handleSubmit}>submit</button>
				</div>
			</div>
		</div>
	)
}

export default LandingSignInPopup