export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST
  payload: {
    email: string
    password: string
  }
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE
  payload: string
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction

export const loginRequest = (credentials: {
  email: string
  password: string
}): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: credentials
})

export const loginSuccess = (): LoginSuccessAction => ({
  type: LOGIN_SUCCESS
})

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error
})
