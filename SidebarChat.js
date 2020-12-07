import { Avatar } from '@material-ui/core';
import React ,{useEffect, useState} from 'react';
import db from './firebase';
import'./SidebarChat.css';
import {Link} from "react-router-dom"

function SidebarChat({id,name,addnewChat}) {
const [seed ,setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = ()=>{
        const roomName = prompt("Please enter name for chat");
        if(roomName){
            //do some clever stuff here..
            db.collection('rooms').add({
                name:roomName,
            })
        }
    };
    return  !addnewChat?(
        <Link to = {`/rooms/${id}`}>
             <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
        </Link>
       
    ):(
        <div onClick = {createChat} className = "sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
