import React from 'react'
import './Styles/Login.css'
import Fbicon from './Assets/facebook.png'
import Igicon from './Assets/instagram.png'
import Twicon from './Assets/twitter.png'


class Login extends React.Component{
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
                
                <div className="socialmedia__container">
                    <h2>iniciar sesión con:</h2>
                    <div className="login__container--social-media">
                        <img src={Igicon} className="socialmedia__icons"/>
                        <img src={Fbicon} className="socialmedia__icons"/>
                        <img src={Twicon} className="socialmedia__icons"/>
                    </div>
                </div>

                <button
                type= "button"
                className="button">
                    Iniciar sesión
                </button>
           </div> 

        );
    }
}

export default Login ;