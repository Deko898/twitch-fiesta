// todo.ts
import { MessagesTypes } from '.';
import { initialState, IMessagesState } from './state';
import { createReducer } from '../../utils';
import { Actions } from './actions.interface';

export default createReducer<IMessagesState, Actions>(initialState, {
    [MessagesTypes.REQUEST_MESSAGES]: (state, action: any) => {
        console.log(action,"ACT")
        return {
            ...state,
            isLoading: true,
        }
    },
    [MessagesTypes.REQUEST_MESSAGES_SUCCESS]: (state, action: any) => ({
        ...state,
        isLoading: false,
        messages: action.messages
    }),
    [MessagesTypes.REQUEST_MESSAGES_FAILURE]: (state, action: any) => ({
        ...state,
        isLoading: false,
        error: action.error
    }),
})