import React from 'react';
import {Image, Text, View} from 'react-native';

import HomeIcon from '../assets/icons/Home.png';
import HomeActiveIcon from '../assets/icons/HomeActive.png';
import SearchIcon from '../assets/icons/Search.png';
import SearchActiveIcon from '../assets/icons/SearchActive.png';
import HeartIcon from '../assets/icons/Heart.png';
import HeartActiveIcon from '../assets/icons/HeartActive.png';
import UserIcon from '../assets/icons/User.png';
import UserActiveIcon from '../assets/icons/UserActive.png';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Search from '../screens/main/Search';
import Cart from '../screens/main/Cart';
import Account from '../screens/main/Account';
import useTheme from '../hooks/useTheme';

const Tab = createBottomTabNavigator();

interface IMainStackProps {}

const MainStack: React.FC<IMainStackProps> = props => {
  const {Colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, lazy: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: props => (
            <Text
              style={{
                color: props.focused
                  ? Colors.primary[500]
                  : Colors.secondary[600],
                fontWeight: '600',
                fontSize: 12,
                textAlign: 'center',
              }}>
              Home
            </Text>
          ),
          tabBarIcon: props =>
            props.focused ? (
              <Image source={HomeActiveIcon} style={{width: 20, height: 20}} />
            ) : (
              <Image source={HomeIcon} style={{width: 20, height: 20}} />
            ),
          tabBarActiveBackgroundColor: Colors.primary[50],
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: props => (
            <Text
              style={{
                color: props.focused
                  ? Colors.primary[500]
                  : Colors.secondary[600],
                fontWeight: '600',
                fontSize: 12,
                textAlign: 'center',
              }}>
              Search
            </Text>
          ),
          tabBarIcon: props =>
            props.focused ? (
              <Image
                source={SearchActiveIcon}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image source={SearchIcon} style={{width: 20, height: 20}} />
            ),
          tabBarActiveBackgroundColor: Colors.primary[50],
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: props => (
            <Text
              style={{
                color: props.focused
                  ? Colors.primary[500]
                  : Colors.secondary[600],
                fontWeight: '600',
                fontSize: 12,
                textAlign: 'center',
              }}>
              Your Cart
            </Text>
          ),
          tabBarIcon: props =>
            props.focused ? (
              <Image source={HeartActiveIcon} style={{width: 20, height: 20}} />
            ) : (
              <Image source={HeartIcon} style={{width: 20, height: 20}} />
            ),
          tabBarActiveBackgroundColor: Colors.primary[50],
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: props => (
            <Text
              style={{
                color: props.focused
                  ? Colors.primary[500]
                  : Colors.secondary[600],
                fontWeight: '600',
                fontSize: 12,
                textAlign: 'center',
              }}>
              Account
            </Text>
          ),
          tabBarIcon: props =>
            props.focused ? (
              <Image source={UserActiveIcon} style={{width: 20, height: 20}} />
            ) : (
              <Image source={UserIcon} style={{width: 20, height: 20}} />
            ),
          tabBarActiveBackgroundColor: Colors.primary[50],
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
