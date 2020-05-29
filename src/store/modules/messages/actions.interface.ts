import { MessagesTypes } from ".";

export interface RequestMessages {
    type: MessagesTypes.REQUEST_MESSAGES;
    isLoading: true
}


export interface RequestMessagesSuccess {
    type: MessagesTypes.REQUEST_MESSAGES_SUCCESS;
    messages: any
}

export interface RequestMessagesFailure {
    type: MessagesTypes.REQUEST_MESSAGES_FAILURE;
    error: any
}

export type Actions = RequestMessages
    | RequestMessagesSuccess
    | RequestMessagesFailure