import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().Type;
};

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostSuccess: (payLoad) => payLoad,
    getPostFailure: (err) => err,
});