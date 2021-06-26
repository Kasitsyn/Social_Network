let state = {
    profilePage: {
        postData: [
            { id: 1, message: "Hi, how are you?", likesCount: 0 },
            { id: 2, message: "It's my first post!", likesCount: 23 }
        ]

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

export let addPost = (postMessage) => {
    let newPost = {
        id: 3, 
        message: postMessage,
        likesCount: 100
    }

    state.profilePage.postData.push(newPost)
}

export default state