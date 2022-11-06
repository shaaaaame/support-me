import React, {useState} from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import './LandingSignUpPopup.css';

function CheckValidEmail(email){
	return email.includes('@') && email.includes('.')
}

function LandingSignUpPopup(props) {
	const [mail, setMail] = useState('');
	const [pass, setPass] = useState('');
	const [valid, setValid] = useState(true)

	const handleMailChange = (e) => {
		setMail(e.target.value);
	}	
	
	const handlePassChange = (e) => {
		setPass(e.target.value);
	}		

	const handleSubmit = (e) => {
		if (CheckValidEmail(mail)){
			setValid(true)
			console.log("send data: " + mail + ' ' + pass) //send data to andy
		}else{
			setValid(false);
		}
	}

	return (
		<div className='landing-signup-popup'>
			<div className='landing-signup-cover'></div>
			<div className='landing-signup-box'>
				<FeatherIcon className='landing-signup-exit' icon='x' onClick={props.exit}/>
				<div className='landing-signup-container'>
					<h2 className='landing-signup-popup-title'>sign up</h2>
					{valid ? <></> : <p className='landing-signup-invalid'>invalid email!</p>
					}
					<p className='landing-signup-popup-label'>email:</p>
					<input className='landing-signup-popup-fill' type="text" onChange={handleMailChange} />
					<p className='landing-signup-popup-label'>password:</p>
					<input className='landing-signup-popup-fill' type="text" onChange={handlePassChange} />
					<button className='landing-signup-popup-submit' onClick={handleSubmit}>submit</button>
				</div>
			</div>
		</div>
	)
}

export default LandingSignUpPopup