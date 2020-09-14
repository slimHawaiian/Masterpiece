import * as ActionTypes from './actionTypes';

export const Artists = (state = {isLoading:true,errMess:null,artists:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ARTISTS:
            return {...state, isLoading: false, errMess: null, artists: action.payload};
        case ActionTypes.GET_ARTISTS:
            return {...state, isLoading: true, errMess: null, artists: []};
        case ActionTypes.GET_ARTISTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
          return state;
      }
};