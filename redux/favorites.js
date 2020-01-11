import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

        default:
            return state;
    }
};

// reducers will take actions which are objects with two properties of type and payload, which is created from actioncreators, and compare if the action.type property is equal to an action type that exist. If it does, then it will perform an action to return a new state that includes the action.payload property that was passed in.