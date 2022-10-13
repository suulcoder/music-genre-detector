import {
    takeEvery,
    put,
} from 'redux-saga/effects';

import * as actions from '../actions/models';
import * as types from '../types/models';
import axios from 'axios';

import { API_URL } from '../configuration';

function* fetchModels(action) {

    try {
        const response = yield axios.post(
          `${API_URL}`,
          action.payload,
          {
            mode: 'cors',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
            },
          }
        )
        .then(response => {
            if(response.status == 200){
                if(response.success == false){
                    return {}
                } else {
                    return response.data
                }
            }
        })
        yield put(actions.completeModelApiCall(response))
    } catch (error) {
        console.log(error)
        yield put(actions.failModelApiCall(''))
    }
}
  
export function* watchFetchModels() {
    yield takeEvery(
        types.MODEL_API_CALL_STARTED,
        fetchModels,
    );
}