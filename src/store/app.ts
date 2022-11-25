import { RouteObject } from 'react-router-dom'
import { createSlice } from '@reduxjs/toolkit'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { isEmpty, map } from 'lodash'
import router from '@/router'

export interface AppInitialState {
  collapsed: boolean
  menus: ItemType[]
}

/**
 * read localstorage saved data
 */
function initLocalStorage() {
  return Object.keys(localStorage).reduce((previous, key) => {
    return {
      ...previous,
      [key]: JSON.stringify(localStorage.getItem(key))
    }
  }, {})
}

/**
 * iteration reading menus
 * @param menus
 * @param prevPath
 */
function iterationMenus(menus?: RouteObject[], prevPath?: string): ItemType[] {
  return map(menus, item => {
    if (!item.path) {
      return null
    }

    const label = prevPath ? `page.${prevPath}.${item.path}` : `page.${item.path}`

    return {
      label,
      icon: '',
      key: prevPath ? `${prevPath}-${item.path}` : item.path,
      children: isEmpty(item.children) ? null : [
        ...iterationMenus(item.children, item.path)
      ]
    }
  }).filter(item => item)
}

function initMenus() {
  const pages = router[0].children
  return iterationMenus(pages)
}

function initAppState() {
  return {
    ...initLocalStorage(),
    menus: [
      ...initMenus()
    ]
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initAppState(),
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
