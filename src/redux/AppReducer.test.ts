import {appReducer, InitializedSuccessedAC, InitialStateType} from "./AppReducer"

let startState: InitialStateType

beforeEach(() => {
     startState = {
        isInitialized: false
     }
})

test("isInitialized should be true", () => {
   const action = InitializedSuccessedAC()
   const endState = appReducer(startState, action)

   expect(endState.isInitialized).toBe(true)
})
