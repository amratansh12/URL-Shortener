
# URL-Shortener

This web application shortens the entered URL. The frontend has been created on ReactJS. Some of the libraries used in the project are react-router-dom, react-bootstrap icons, jwt-decode, universal-cookie and react-tsparticles.


## Documentation

You can learn more about ReactJS [here](https://react.dev/).

Libraries used in the project

JWT-decode library : [here](https://www.npmjs.com/package/jwt-decode)

React-Bootstrap icons : [here](https://www.npmjs.com/package/react-bootstrap-icons)

React Router DOM : [here](https://reactrouter.com/en/main)

React tsparticles : [here](https://www.npmjs.com/package/react-tsparticles)

Universal Cookie : [here](https://www.npmjs.com/package/universal-cookie)




## Run Locally

Clone the project

```bash
  git clone https://github.com/amratansh12/URL-Shortener.git
```

Go to the project directory

```bash
  cd URL-Shortener
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Appendix

The app is built in the ReactJS framework. I used the function based components for different parts of the app. Added the login and register forms for the authentication. The user is authenticated by making a request on the backend which returns a json web tokem. This token is stored in the browser's cookie for the persistent login functionality. 

The URL shortener consists of an input and a submit button which makes a request on the backend. The backend responds with a shortened url. Short url is generated by a Restful api service. 

User data is also managed in the backend. A search box is also added which lets you search among all your entered URLs in the history.


## Features

- URL Shortening
- Search functionality
- Login/Register and logout authentication
- Persistent Login
- Copying the URL in one click


## Support

For support, email ashri1205@gmail.com.

