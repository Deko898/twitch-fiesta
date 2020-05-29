export interface IMessagesState {
    messages: any[];
    isLoading: boolean;
    error?: any
}

export const initialState: IMessagesState = {
    messages: [],
    isLoading: false,
    error: null
}