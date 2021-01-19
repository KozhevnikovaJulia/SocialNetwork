import {authReducer, setUserData , InitialStateType} from "./AuthReducer"

let startState: InitialStateType

beforeEach(() => {
     startState = {
        id: null as number | null,
        email: null as string | null,    
       login: "Julia" as string | null,
       isAuth: false
     }
})


test("id, email, login, isAuth after settings should be correct", () => {
    const action = setUserData(5, "MyEmail", "JuliaK", true)
    const endState = authReducer(startState, action)

    expect(endState).toEqual({
        id: 5,
        email: "MyEmail",
        login: "JuliaK",
        isAuth: true
    })
})