import useTheme from '../../../hooks/useTheme';
import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

interface IAccountScreenProps {}

const Account: React.FC<IAccountScreenProps> = props => {
  const {Colors} = useTheme();
  return (
    <SafeAreaView style={{backgroundColor: Colors.secondary[50]}}>
      <ScrollView
        style={{backgroundColor: Colors.secondary[50], height: '100%'}}>
        <Text>Account</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
