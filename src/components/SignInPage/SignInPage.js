import { useState } from 'react'
import './SignInPage.css'
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

const SignInPage = () => {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    function onSignInSubmit (event) {

        event.preventDefault();
        fetch('https://url-shortener-api-chi.vercel.app/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result === 'Invalid credentials'){
                window.alert('Invalid credentials')
            }else{
                window.alert('User signed In');
                window.location.href = '/home'
                cookies.set('jwt', result);
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <form>
            <div className="signInBox">
                <h2>SIGN IN</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Email' onChange={(event) => setUserEmail(event.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Password' onChange={(event) => setUserPassword(event.target.value)}/>
                <button onClick={(e) => onSignInSubmit(e)}>Sign In</button>
            </div>
        </form>
    );
}

export default SignInPage;