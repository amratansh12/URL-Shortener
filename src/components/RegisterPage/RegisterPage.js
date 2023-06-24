import { useState } from 'react'
import './RegisterPage.css'
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

const RegisterPage = () => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const onRegisterSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await fetch('http://localhost:3000/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    password: userPassword
                })
            })
            const result = await response.json()
            if(result.errors){
                console.log(result.errors.email)
                if(result.errors === 'This email is already linked') window.alert('This email is already linked')
                else{
                    Object.values(result.errors).forEach(error => {
                        if(error.length) window.alert(error)
                    })
                }
            }else{
                window.alert('User successfuly created')
                cookies.set('jwt', result, {maxAge: 30*60*1000 });
                window.location.href = '/home'
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <form>
            <div className="registerBox">
                <h2>REGISTER</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Name' onChange={(event) => setUserName(event.target.value)}/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Email' onChange={(event) => setUserEmail(event.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Password' onChange={(event) => setUserPassword(event.target.value)}/>
                <button onClick={(event) => onRegisterSubmit(event)}>Register</button>
            </div>
        </form>
    );   
}

export default RegisterPage;