import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../FireBase';
import { ChatEngine} from 'react-chat-engine';
import axios from 'axios';

//components
import Navbar from './Navbar';

//context
import { authContext } from '../Context/AuthContextProvider';

const Chat = () => {

    const [loading , setLoading] = useState(true);
    const user = useContext(authContext);
    const history = useHistory();

    const logOutHandler = async () => {
        await auth.signOut();
        history.push('/')
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    useEffect(() => {
        if(!user) {
            history.push("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "9e5934f6-6c94-4ad7-9686-c5450057dc23",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "2291fa54-6285-4ca9-9f7b-1ddbbc0d84e0"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                    
                })
        })

            
    }, [user , history])

    // if (!user || loading) return "Loading..."

    return (
        <>
            <Navbar logOutHandler={logOutHandler}/>

            <ChatEngine 
            projectID= "9e5934f6-6c94-4ad7-9686-c5450057dc23"
            height="calc(100vh - 50px)"
            userName={user.email}
            userSecret={user.uid}
            />
        </>
    );
};

export default Chat;