import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit=(e) => {
        e.preventDefault()

        const Login = {
            id: Math.random(),
            login,
            password,
            done: false,
        }

        console.log(Login)

        setLogin("")
        setPassword("")
    }


  return (
        <div className="box">
        <div className="form">
            <h2>Inscrever-se</h2>
            <form onSubmit={handleSubmit}>
            <div class="inputBox">
                <input 
                type="text" 
                required
                name='login'
                onChange={(e) => setLogin(e.target.value)}
                value={login || ""}
                />
                <label htmlFor='login'>Username</label>
                <i></i>
            </div>
            <div className="inputBox">
                <input 
                type="password" 
                required
                name='senha'
                onChange={(e) => setPassword(e.target.value)}
                value={password || ""}
                />
                <label htmlFor='senha'>Senha</label>
                <i></i>
            </div>
            <div className="links">
                <a href="">Login</a>
                <a href=""></a>
            </div>
                <input type="submit" value="Inscrever-se"/>
            </form>
        </div>
        </div>
  );
}

export default App;
