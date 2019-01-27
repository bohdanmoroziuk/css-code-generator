import ACTION_TYPES from '../constants/actions';

const initialState = {
    inset: false,
    offsetX: '10',
    offsetY: '10',
    blurRadius: '5',
    spreadRedius: '0',
    shadowColor: '#000000',
    backgroundColor: '#ffffff',
    boxColor: '#e7a61a',
    opacity: '1' 
};

const boxShadowReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_BOX_SHADOW_PARAMETER:
            return {
                ...state,
                ...action.parameter
            };
        default:
            return {
                ...state
            };
    }
};

export default boxShadowReducer;