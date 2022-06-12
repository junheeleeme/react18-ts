import { TOGGLE_THEME } from "../types";

const initailState = 'dark'

export const theme = (state = initailState, action) => {
    switch(action.type) {
        case TOGGLE_THEME: {
            if(state === 'light') return 'dark'
            else return 'light'
        }
        default : return state
    }
}