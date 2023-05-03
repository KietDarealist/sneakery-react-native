import useTheme from '../../../hooks/useTheme';
import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

interface ICartScreenProps {}

const Cart: React.FC<ICartScreenProps> = props => {
  const {Colors} = useTheme();
  return (
    <SafeAreaView style={{backgroundColor: Colors.secondary[50]}}>
      <ScrollView
        style={{backgroundColor: Colors.secondary[50], height: '100%'}}>
        <Text>Cart</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
