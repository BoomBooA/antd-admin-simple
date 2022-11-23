import { createSlice } from '@reduxjs/toolkit'
import { SESSION_STORE_NAME } from '@/config'

export interface SessionInitialState {
  username: string
  role: String[]
  sessionKey: String
}

export const sessionInitialState = {
  username: '',
  role: [],
  sessionKey: ''
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState: sessionInitialState,
  reducers: {
    update(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
    destroy(state) {
      sessionStorage.removeItem(SESSION_STORE_NAME)
      return {
        ...state,
        ...sessionInitialState
      }
    }
  }
})

export const {
  update,
  destroy
} = sessionSlice.actions

export default sessionSlice.reducer
