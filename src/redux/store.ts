import { createStore, combineReducers } from 'redux'
import loginReducer from './reducers'

const rootReducer = combineReducers({
  login: loginReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store
