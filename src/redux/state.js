const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
        }
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
        if(action.type === ADD_POST){
            let newPost={
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else {
            if(action.type === UPDATE_NEW_POST_TEXT){
                        this._state.profilePage.newPostText = action.newText;
                        this._callSubscriber(this._state);
                    }
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default store;
window.store = store;