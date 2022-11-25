import { configureStore } from '@reduxjs/toolkit'
import app, { AppInitialState } from './app'
import session, { SessionInitialState } from './session'

export interface RootState {
  app: AppInitialState,
  session: SessionInitialState
}

export default configureStore({
  reducer: {
    app,
    session
  }
})
