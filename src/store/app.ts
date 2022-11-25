import { createSlice } from '@reduxjs/toolkit'
import router from '@/router'

console.log('router', router)

export interface AppInitialState {
  collapsed: boolean
}

function initState() {
  return Object.keys(localStorage).reduce((previous, key) => {
    return {
      ...previous,
      [key]: JSON.stringify(localStorage.getItem(key))
    }
  }, {})
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initState(),
  reducers: {
    update(state, action) {
      const { key, value } = action.payload
      if (key) {
        localStorage.setItem(key, value)
        return {
          ...state,
          [key]: value
        }
      }
    }
  }
})

export const {} = appSlice.actions

export default appSlice.reducer
