import './ProtectedRoute.css'

const ProtectedRoute = (props) => {
  const {Component} = props;
  const jwt = document.cookie.slice(4)

   return(
    <div>
      {
        (jwt.length)?
          <Component />
        : <h2 className='userNotLoggedIn'>User not signed in</h2>
      }
    </div>
   );
}

export default ProtectedRoute;
