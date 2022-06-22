import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../FireBase';
import { ChatEngine, chatEngine } from 'react-chat-engine';

//components
import Navbar from './Navbar';


const Chat = () => {

    const history = useHistory();

    const logOutHandler = () => {
        auth.signOut();
        history.push('/')
    }

    return (
        <>
            <Navbar logOutHandler={logOutHandler}/>

            <ChatEngine 
            projectID= "9e5934f6-6c94-4ad7-9686-c5450057dc23"
            height="calc(100vh - 50px)"
            userName="."
            userSecret="."
            />
        </>
    );
};

export default Chat;