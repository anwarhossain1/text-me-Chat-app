import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const projectID="4fa183fb-a727-45d2-9368-7c107271fc14";

const LoginForm = () => {
    const [ username, setUsername] = useState('');
    const [ password, setPassword ] = useState('');
    const [error, setError] = useState('');


    const handleSubmit= async (e) =>{
        e.preventDefault();
        const authObject = { 'Project-ID': projectID , 'User-Name': username , 'User-Secret':password }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
            setError('');
            
        } catch (error) {
            setError("Wrong Id, Pass")
        }



        //

    }





    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Text-Me</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="password" required />
                     <div align="center">
                         <button type="submit" className="button">
                             <span>Login</span>

                         </button>
                         <h1>
                             <span>{error}</span>
                         </h1>

                     </div>
                </form>

            </div>
            
        </div>
    )
}
export default LoginForm;