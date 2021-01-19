import {usersReducer, UserType, InitialStateType,followSuccess, unfollowSuccess, setUsers, setCurrentPage, setUsersTotalCount,
    toggleIsFetching, toggleFollowingInProgress } from "./UsersReducer"

let startState: InitialStateType

beforeEach(() => {
    startState = {
        users: [
            { id: 1, name: "Ann", uniqueUrlName: "", photos: {small:"", large:""}, status: "", followed: false},
            { id: 2, name: "Andy", uniqueUrlName: "", photos: {small:"", large:""}, status: "", followed: false },
            { id: 3, name: "Mike", uniqueUrlName: "", photos: {small:"", large:""}, status: "", followed: false }
        ] as Array<UserType>,
        pageSize: 10,
        usersTotalCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [1, 2]
    }
})

test("after click button follow, followed should be true", () => {
   const action = followSuccess (1)
   const endState = usersReducer(startState, action)

   expect(endState.users[0].followed).toBe(true)
})
test("after click button unFollow, followed should be false", () => {
    const action = unfollowSuccess (1)
    const endState = usersReducer(startState, action)
 
    expect(endState.users[0].followed).toBe(false)
 })
 test("users should be set", () => {
    startState = {
        users: [] as Array<UserType>,
        pageSize: 10,
        usersTotalCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [1, 2]
    }
    const action = setUsers ([
        { id: 1, name: "Ann", uniqueUrlName: "", photos: {small:"", large:""}, status: "", followed: false},
        { id: 2, name: "Andy", uniqueUrlName: "", photos: {small:"", large:""}, status: "", followed: false },
        { id: 3, name: "Mike", uniqueUrlName: "", photos: {small:"", large:""}, status: "", followed: false }
    ])
    const endState = usersReducer(startState, action)
 
    expect(endState).toEqual({
        users: [
            { id: 1, name: "Ann", uniqueUrlName: "", photos: {small:"", large:""}, status: "", followed: false},
            { id: 2, name: "Andy", uniqueUrlName: "", photos: {small:"", large:""}, status: "", followed: false },
            { id: 3, name: "Mike", uniqueUrlName: "", photos: {small:"", large:""}, status: "", followed: false }
        ] as Array<UserType>,
        pageSize: 10,
        usersTotalCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [1, 2]
    })
 })
 test("after setting current page should be correct", () => {
    const action = setCurrentPage (2)
    const endState = usersReducer(startState, action)
 
    expect(endState.currentPage).toBe(2)
 })
 test("after setting Users Total Count should be correct", () => {
    const action = setUsersTotalCount (10)
    const endState = usersReducer(startState, action)
 
    expect(endState.usersTotalCount).toBe(10)
 })
 test("isFething shoul be changed to the opposite", () => {
    const action = toggleIsFetching (false)
    const endState = usersReducer(startState, action)
 
    expect(endState.isFetching).toBe(false)
 })