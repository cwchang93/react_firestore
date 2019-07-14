import { SWITCH_OPEN, SWITCH_CLOSE } from './newTestConstants';

export const switchOpen = () => {
    return {
        type: SWITCH_OPEN
    }
}

export const switchClose = () => {
    return {
        type: SWITCH_CLOSE
    }
}
