import WelcomePage from './components/WelcomePage/WelcomePage'
import ParticlesBG from './components/ParticlesBG/ParticlesBG'
import NavigationBar from './components/NavigationBar/NavigationBar'
import SignInPage from './components/SignInPage/SignInPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import URLShortenerBox from './components/URLShortenerBox/URLShortenerBox'
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div>
        <ParticlesBG />
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<WelcomePage/>}/>
          <Route exact path="/signin" element={<SignInPage />}/>
          <Route exact path="/register" element={<RegisterPage />}/>
          <Route exact path="/home" element={<ProtectedRoute Component={URLShortenerBox} />}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
