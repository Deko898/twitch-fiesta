import React from "react";
import { connect } from "react-redux";
import IAppState from "./store/modules/IAppState.interface";
import { getMessagesRequestAction } from "./store/modules/messages/actions";

interface IProps {
  getMessages: Function;
  messages: Array<any>;
  isLoading: Boolean;
  error:any
}

// Note: This is mainly done to enable testing
export const MessagesContainer: React.FunctionComponent<IProps> = ({
  getMessages,
  messages,
  isLoading,
  error
}) => {
  console.log(messages, isLoading, getMessages);
  // Workaround for Enyzme testing of useEffect, allows stubbing
  // See: https://blog.carbonfive.com/2019/08/05/shallow-testing-hooks-with-enzyme/
  React.useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <div className="characters-container">{isLoading ? "Loading" : "Noup"}</div>
  );
};

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    messages: store.messages.messages,
    isLoading: store.messages.isLoading,
    error: store.messages.error
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getMessages: () => dispatch(getMessagesRequestAction()),
  };
};

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
