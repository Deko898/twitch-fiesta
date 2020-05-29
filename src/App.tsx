import * as React from "react";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import IAppState from "./store/modules/IAppState.interface";
import { Store } from "redux";

import MessagesContainer from "./MessagesContainer";

// Business domain imports
const store: Store<IAppState> = configureStore();

const App: React.SFC<{}> = () => (
  <Provider store={store}>
    <MessagesContainer />
  </Provider>
);

export default App;
