import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action){
    const posts = yield call(api.fecthPosts);
    console.log('[posts]', posts);
    yield put(actions.getPosts.getPostSuccess(posts));
}

function* mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
}

// Generator function ES6

export default mySaga;