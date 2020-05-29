// Third-Party dependencies
import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store
  } from 'redux';
  
  // React Sagas
  import createSagaMiddleware from 'redux-saga';
  import { messagesSagas, messagesReducers } from './modules/messages';

  // Chrome Dev Tools
  import { composeWithDevTools } from 'redux-devtools-extension';
  
  // Business domain imports
  import IAppState from './modules/IAppState.interface';
  
  // Saga Middleware
  const sagaMiddleware = createSagaMiddleware();
  
  // Create the root reducer
  const rootReducer = combineReducers<IAppState>({
    messages: messagesReducers
  });
  
  // Create a configure store function of type `IAppState`
  export default function configureStore(): Store<IAppState, any> {
    const store = createStore(
                    rootReducer,
                    undefined,
                    composeWithDevTools(applyMiddleware(sagaMiddleware))
                  );
  
    sagaMiddleware.run(messagesSagas);
  
    return store;
  }
  
  