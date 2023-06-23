import './WelcomePage.css'
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return(
        <>
        <div className="welcomeBox">
            <h2>Welcome to the URL Shortener</h2>
            <div className="welcomeButtons">
                <Link to='/signin'><button id='submitButton'>Sign In</button></Link>
                <Link to='/register'><button id='submitButton'>Register</button></Link>  
            </div>
        </div>
        </>
    );
}

export default WelcomePage;