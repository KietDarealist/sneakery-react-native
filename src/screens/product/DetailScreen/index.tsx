import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import useTheme from '../../../hooks/useTheme';
import NavigationHeader from '../../../components/molecules/NavigationHeader';
import {BidButton} from '../../../components/molecules';
import ProductSlider from '../../../components/molecules/ProductSlider';
import DetailLoadingScreen from '../DetailLoadingScreen';

interface IDetailScreenProps {}

const PoductDetailScreen: React.FC<IDetailScreenProps> = props => {
  const route: any = useRoute();
  console.log('Product detail', route.params?.id);
  const {Colors} = useTheme();
  return null;
};

export default PoductDetailScreen;
