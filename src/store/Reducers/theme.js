import { TOGGLE_THEME } from 'store/types'

const initailState = 'dark'

export const theme = (state = initailState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      if (state === 'light') return 'dark'
      return 'light'
    }
    default:
      return state
  }
}
