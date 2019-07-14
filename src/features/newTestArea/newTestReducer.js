import { SWITCH_OPEN, SWITCH_CLOSE } from './newTestConstants';

const initialState = {
    data: 'cow',
    newData: '喲',
    toggle: '我是他勾'
}

const newTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_OPEN:
            console.log(state);
            return { ...state, toggle: 'Open' }

        case SWITCH_CLOSE:
            console.log(state);
            return { ...state, toggle: 'Close' }

        default:
            return state;
    }


}

export default newTestReducer;