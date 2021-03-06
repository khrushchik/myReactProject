import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/Item";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = state.messagesData.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage()

    }

    let onNewMessageChange = (e)=>{
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    if(props.isAuth===false){
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;