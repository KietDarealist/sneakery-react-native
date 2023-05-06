import useTheme from '../../../hooks/useTheme';
import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Image, View} from 'react-native';

interface ICartScreenProps {}

const Cart: React.FC<ICartScreenProps> = props => {
  const {Colors} = useTheme();
  return (
    <SafeAreaView style={{backgroundColor: Colors.secondary[50]}}>
      <ScrollView
        style={{backgroundColor: Colors.secondary[50], height: '100%'}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 300, height: 300}}
            source={require('../../../assets/images/EmptyCartStorySet.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
