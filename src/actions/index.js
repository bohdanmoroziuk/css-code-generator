import ACTION_TYPES from '../constants/actions';

export const changeBoxShadow = (rule) => ({
    type: ACTION_TYPES.CHANGE_BOX_SHADOW,
    rule
});