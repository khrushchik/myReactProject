const UPDATE_NEW_MESSAGE_BODY ='UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE ='SEND_MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: 'hello'},
        {id: 2, message: 'qq'},
        {id: 3, message: 'bb'},
        {id: 4, message: 'xoxo'},
        {id: 5, message: 'u'}
    ],
    dialogsData: [
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'},
        {id: 3, name: 'user3'},
        {id: 4, name: 'user4'},
        {id: 5, name: 'user5'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state=initialState, action) =>{

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody:action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData:[...state.messagesData, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type:SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>({type:UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;