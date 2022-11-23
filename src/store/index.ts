import { configureStore } from '@reduxjs/toolkit'
import session, { SessionInitialState } from './session'

export interface RootState {
  session: SessionInitialState
}

export default configureStore({
  reducer: {
    session
  }
})
