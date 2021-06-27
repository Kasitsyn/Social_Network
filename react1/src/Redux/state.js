let rerender = () => {
    console.log('state has been changed')
}

let state = {
    profilePage: {
        postData: [
            { id: 1, message: "Hi, how are you?", likesCount: 0 },
            { id: 2, message: "It's my first post!", likesCount: 23 }
        ],
        newPostText: ""
    },

    messagesPage: {
        dialogData: [
            { id: 1, name: "Алексей" },
            { id: 2, name: "Олег" },
            { id: 3, name: "Игнат" },
            { id: 4, name: "Ольга" }
        ],
        messageData: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Good luck!!" }
        ]
    }
}

export let addPost = () => {
    let postMessage = {id: 3, message: state.profilePage.newPostText, likesCount: 111}
    state.profilePage.postData.push(postMessage)
    state.profilePage.newPostText = ''
    rerender(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerender(state)
}

export let subscriber = (observer) => {
    rerender = observer
}

export default state