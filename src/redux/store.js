import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state:  {
        profilePage:{
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 23},
                {id: 2, message: 'It`s my first post.', likesCount: 12}],
            newPostText: 'nikita'
        },
        dialogPage:{
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
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log('state changed')
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;