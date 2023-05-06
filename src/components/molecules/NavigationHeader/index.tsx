import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import useTheme from '../../../hooks/useTheme';

import ArrowLeftIcon from '../../../assets/icons/ArrowLeft.png';
import InfoFillIcon from '../../../assets/icons/InfoFill.png';
import {useNavigation} from '@react-navigation/native';

interface IAuthNavigateHeaderProps {
  title: string;
}

const NavigationHeader: React.FC<IAuthNavigateHeaderProps> = props => {
  const {Colors} = useTheme();
  const navigation = useNavigation();
  const {title} = props;
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{width: '33%'}}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/icons/ArrowLeft.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
      <View style={{width: '33%'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors.secondary[700],
          }}>
          {title}
        </Text>
      </View>
      <View style={{width: '33%'}}></View>
    </View>
  );
};

export default NavigationHeader;
