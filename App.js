import React from 'react';
import {
  Button,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';

import store from './src/store/configureStore';

const getN = state => state.n

const Screen = () => {
  const dispatch = useDispatch()
  const n = useSelector(getN);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      // contentInsetAdjustmentBehavior="automatic"
      style={{ ...backgroundStyle }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end', padding: 10}}
    >
      <Text style={{ fontSize: 40 }}>{n}</Text>

      <Button title="INCREMENT" onPress={() => dispatch({ type: 'i' })} />
    </ScrollView>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        
        <Screen />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
