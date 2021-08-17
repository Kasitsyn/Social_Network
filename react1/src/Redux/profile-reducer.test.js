import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
    postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post!", likesCount: 23 },
        { id: 3, message: "Yo!", likesCount: 223 },
        { id: 4, message: "AUF", likesCount: 2212 }
    ]

}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('kavabanga!')
    
    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(5) 
});

test('message should be correct', () => {
    let action = addPostActionCreator('kavabanga!')
    
    let newState = profileReducer(state, action)

    expect(newState.postData[4].message).toBe('kavabanga!') 
});

test('after deleting length should be decremented', () => {
    let action = deletePost(1)
    
    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(3) 
});
