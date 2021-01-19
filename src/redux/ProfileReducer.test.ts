import {profileReducer , addPost, removePost, setStatus, InitialStateType, PostsType} from "./ProfileReducer"

let startState: InitialStateType

beforeEach(() => {
     startState = {
        posts: [
            { id: 1, message: "It is my first post", likesCount: 0 },
            { id: 2, message: "Hi", likesCount: 4 },
            { id: 3, message: "Hello", likesCount: 5 }
        ] as Array<PostsType>,
        profile: null,
        status: ""
     }
})

test("number of posts should increase", () => {
   const action = addPost("Cool")
   const endState = profileReducer(startState, action)

   expect(endState.posts.length).toBe(4)
})
test("new post text should be correct", () => {
    const action = addPost("Cool")
    const endState = profileReducer(startState, action)
 
    expect(endState.posts[3].message).toBe("Cool")
 })
 test("set status shoul be correct", () => {
    const action = setStatus("I am cool")
    const endState = profileReducer(startState, action)
 
    expect(endState.status).toBe("I am cool")
 })
 test("number of posts shoul be decrease", () => {
   const action = removePost (3)
   const endState = profileReducer(startState, action)

   expect(endState.posts.length).toBe(2)
})