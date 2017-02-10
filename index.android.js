import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Scene } from 'react-native-router-flux';

import reducers from './android/reactNative/reducers';
import LogIn from './android/reactNative/components/logIn';
import MakeNickname from './android/reactNative/components/makeNickname';
import Main from './android/reactNative/components/main';
import Profiles from './android/reactNative/components/profiles';

const RouterWithRedux = connect()(Router);
const createStoreWithMiddleware =
  applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);

export default class wikius extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" hideNavBar>
            <Scene key="logIn" component={LogIn} title="Login" initial />
            <Scene key="makeNickname" component={MakeNickname} title="makeNickname" />
            <Scene key="main" component={Main} title="Main" />
            <Scene key="profiles" component={Profiles} title="Profiles" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('wikius', () => wikius);
