import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux"
import reducer from "./reducer"
import {createStore} from "redux"
import Timer from "./component/Timer"

// CreatrStore함수를 사용해 Store생성

const store = createStore(reducer)


// Flux아키텍처
// Action => Dispatcher => Store => View => Action
                
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
