// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import RootNavigator from './src/components/navigators/RootNavigator';

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
