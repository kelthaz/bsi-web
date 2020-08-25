import Router from 'next/router';
import getConfig from 'next/config';
import {
    TEST_ACTION
} from '../constants';

const initialState = {
};

function rootReducer(state = initialState, action) {
    if (action.type === TEST_ACTION) {
        return { ...state, testStateVariable: action.payload };
    }

    return state;
}

export default rootReducer;
