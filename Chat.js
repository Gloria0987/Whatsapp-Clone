import { Avatar,IconButton} from '@material-ui/core';
import React ,{useEffect, useState} from 'react';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {useParams} from "react-router-dom";
import "./Chat.css";
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import db from './firebase';

function Chat() {
    const [input, setInput] =useState('');
    const [seed ,setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("")

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot =>(setRoomName (snapshot.data().name)))
        }
    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const sendMessage = (e)=>{
        e.preventDefault();
        console.log('You typed >>>',input)
        setInput('');
    }
    return (
        <div className = "chat">
            <div  className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className ="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && `chat__receiver`}`}><span className="chat__name">Kambua Sammy</span>Hey Guys<span className="chat__timestamp">4:21pm</span></p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" value={input} onChange ={e=>setInput(e.target.value)}placeholder="Type a message"/>
                    <button type= "submit" onClick={sendMessage}>Send a Message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
