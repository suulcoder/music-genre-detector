import { combineReducers } from 'redux';

import * as types from '../types/models';

export const data = (state = null, action) => {
    switch (action.type) {
  
      case types.MODEL_API_CALL_STARTED: {
        return null;
      }
      case types.MODEL_API_CALL_COMPLETED: {
        console.log(action)
        return action.payload;
      }
      case types.MODEL_API_CALL_FAILED: {
        return {};
      }
      case types.RESTART_API_CALL: {
        return null
      }
      default:
        return state;
    }
};

export const error = (state = null, action) => {
    switch (action.type) {
  
      case types.MODEL_API_CALL_STARTED: {
        return null;
      }
      case types.MODEL_API_CALL_COMPLETED: {
        return null;
      }
      case types.MODEL_API_CALL_FAILED: {
        return action.payload.error;
      }
      default:
        return state;
    }
};

const isLoading = (state = false, action) => {
    switch(action.type) {
      case types.MODEL_API_CALL_STARTED: {
        return true;
      }
      case types.MODEL_API_CALL_COMPLETED: {
        return false;
      }
      case types.MODEL_API_CALL_FAILED: {
        return false;
      }
      default:
        return state;
    }
};

const models = combineReducers({
    data,
    isLoading,
    error,
});

export default models;

export const getModelsData = state => state.data;
export const getModelsError = state => state.error;
export const getModelsIsLoading = state => state.isLoading;