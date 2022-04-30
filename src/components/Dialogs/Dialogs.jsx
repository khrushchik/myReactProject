import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/Item";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;