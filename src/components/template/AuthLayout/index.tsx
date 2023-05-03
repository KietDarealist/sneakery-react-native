import React, {Children, Component, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import useTheme from '../../../hooks/useTheme';

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = props => {
  const {children} = props;
  const {Colors} = useTheme();
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 20}}>{children}</View>
    </SafeAreaView>
  );
};

export default AuthLayout;
