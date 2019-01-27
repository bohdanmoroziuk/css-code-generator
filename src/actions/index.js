import ACTION_TYPES from '../constants/actions';

export const changeBoxShadowParameter = (parameter) => ({
    type: ACTION_TYPES.CHANGE_BOX_SHADOW_PARAMETER,
    parameter
});

export const changeColorParameter = (parameter) => ({
    type: ACTION_TYPES.CHANGE_COLOR_PARAMETER,
    parameter
});