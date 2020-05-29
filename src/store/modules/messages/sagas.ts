import { call, put, takeEvery, all } from 'redux-saga/effects';
import { MessagesTypes } from '.';
import { fetchMessages } from '../../../api';
import { getMessagesRequestSuccess, getMessagesRequestFailure } from './actions';

export function* fetchMessagesSaga(): any {
    try {
        const messages = yield call(fetchMessages);
        console.log(messages)
        // const messages = messages;
        console.log(messages, "SAGA messages")

        yield put(getMessagesRequestSuccess(messages))
    } catch (e) {
        console.log(e, "SAGA")
        yield put(getMessagesRequestFailure(e));
    }
}

export function* messagesSagas() {
    yield all([
        takeEvery(MessagesTypes.REQUEST_MESSAGES, fetchMessagesSaga)
    ]);
}
