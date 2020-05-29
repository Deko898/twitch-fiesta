import { MessagesTypes } from ".";
import {
    RequestMessages,
    RequestMessagesSuccess,
    RequestMessagesFailure
} from './actions.interface';

// Business domain imports


export const getMessagesRequestAction = (): RequestMessages => {
    console.log('request')
    return {
        type: MessagesTypes.REQUEST_MESSAGES,
        isLoading: true
    };
}

export const getMessagesRequestSuccess = (messages: any): RequestMessagesSuccess => {
    return {
        type: MessagesTypes.REQUEST_MESSAGES_SUCCESS,
        messages
    };
}

export const getMessagesRequestFailure = (error: any): RequestMessagesFailure => {
    return {
        type: MessagesTypes.REQUEST_MESSAGES_FAILURE,
        error
    };
}