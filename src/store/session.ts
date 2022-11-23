import { createSlice } from '@reduxjs/toolkit'

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
      const { username } = action.payload
      state.username = username
    },
    destroy() {

    }
  }
})

export const {
  update,
  destroy
} = sessionSlice.actions

export default sessionSlice.reducer
