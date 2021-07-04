import React from 'react'
import { Link } from 'react-router-dom';

import './Styles/Login.css'
import Fbicon from './Assets/facebook.png'
import Igicon from './Assets/instagram.png'
import Twicon from './Assets/twitter.png'


class Login extends React.Component{
    handleClick= e=>{
        console.log("iniciar sesion")
    }
    render(){
        return(
            <div className="login__container">   
                <h1> login </h1>
                <div className="login__container--form">
                   <label htmlFor="username"></label>
                   <input
                    type="text"
                    name="Username"
                    className="input"
                    placeholder="Usuario"
                   />
                </div>
                <div className="login__container--form">
                   <label htmlFor="password"></label>
                   <input
                    type="password"
                    name="Username"
                    className="input"
                    placeholder="Contraseña"
                   /> 
                </div>
                <h2>iniciar sesión con:</h2>
                <div className="login__container--social-media">
                    <Link to="/">
                    <img src={Fbicon} className="socialmedia__icons" alt="facebook"/>
                    </Link>
                    <Link to="/">
                    <img src={Twicon} className="socialmedia__icons" alt="twitter"/>
                    </Link>
                    <Link to="/">
                    <img src={Igicon} className="socialmedia__icons" alt="instagram"/>
                    </Link>
                </div>

                <button
                    onClick={this.handleClick}
                    className="button">
                    Iniciar sesión
                </button>
            </div> 

        );
    }
}

export default Login ;