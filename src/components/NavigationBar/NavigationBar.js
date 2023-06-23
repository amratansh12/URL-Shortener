import './NavigationBar.css'
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

const NavigationBar = () => {

    const jwt = cookies.get('jwt')  

    const onSignOut = () => {
        cookies.remove('jwt')
        window.alert('You are successfully logged out')
        window.location.href = '/'
    }

    return(
        <div className="Navbar">
            <h2 id='navbarHeading'><span id='urlHeading'>URL</span><span id='shortenerHeading'>Shortener</span></h2>
            <button style={{display: jwt ? 'inline-block' : 'none'}} onClick={onSignOut}>Signout</button>
        </div>
    );
}

export default NavigationBar