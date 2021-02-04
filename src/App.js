import { ChatEngine } from 'react-chat-engine';
import './App.css';

import React from 'react'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    


    if(!localStorage.getItem('username')) return <LoginForm />;

    

    
        
    
    return (
        <ChatEngine
        height="100vh"
        projectID="4fa183fb-a727-45d2-9368-7c107271fc14"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        
            
        />
    )
}

export default App;
