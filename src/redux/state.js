import message from "../components/Dialogs/Message/Message";

let state={
    profilePage:{
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: 'It`s my first post.', likesCount: 12}]
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
}

export let addPost = (postMessage) =>{
    let newPost={
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
}

export default state;