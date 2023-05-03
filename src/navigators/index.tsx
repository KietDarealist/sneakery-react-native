import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Login from '../screens/auth/Login';
import FirstTime from '../screens/welcome/FirstTime';
import MainStack from './MainStack';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

interface IApplicationNavigatorProps {}

const ApplicationNavigator: React.FC<IApplicationNavigatorProps> = props => {
  const {isAuthenticated, getAuthInfo} = useAuth();

  useEffect(() => {
    getAuthInfo();
  }, []);

  const initialRoute = !!isAuthenticated ? 'MAIN' : 'Welcome';

  console.log('initial route name', initialRoute);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen
            name="MAIN"
            component={MainStack}
            options={{animation: 'fade'}}
          />
        ) : (
          <Stack.Screen
            name="Welcome"
            component={FirstTime}
            options={{animation: 'slide_from_bottom'}}
          />
        )}

        <Stack.Screen
          name="Login"
          component={Login}
          options={{animation: 'slide_from_left'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
