import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchArtists = () => dispatch => {
    dispatch(artistsLoading());

    return fetch(baseUrl + 'artists')
    .then(response => {
            if (response.ok) {
                 return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(artists => {
        dispatch(addArtists(artists));
       
    })
    .catch(error => dispatch(artistsLoadingFailed(error.message)));
};

export const addArtists = artists => ({
    type: ActionTypes.ADD_ARTISTS,
    payload: artists
});

export const artistsLoading = () => ({
    type: ActionTypes.GET_ARTISTS
});

export const artistsLoadingFailed = errMess => ({
    type: ActionTypes.GET_ARTISTS_FAILED,
    payload: errMess
});