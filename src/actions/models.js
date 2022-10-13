import * as types from '../types/models';

export const startModelApiCall = (audio_file) => ({
    type: types.MODEL_API_CALL_STARTED,
    payload: { 
        audio_file
    },
});

export const completeModelApiCall = (response) => ({
    type: types.MODEL_API_CALL_COMPLETED,
    payload: response,
})

export const failModelApiCall = (error) => ({
    type: types.MODEL_API_CALL_FAILED,
    payload: { error},
});

export const restartModelApiCall = () => ({
    type: types.RESTART_API_CALL,
});