import React from 'react';
import {useColorScheme} from 'react-native';

import './src/translations';
import ApplicationNavigator from './src/navigators';

import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </StoreProvider>
  );
}

export default App;
