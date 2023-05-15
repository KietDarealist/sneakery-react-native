import React from 'react';
import {Image, Text, View} from 'react-native';
import useTheme from '../../../hooks/useTheme';
import {IProduct} from '../../../types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface IProductHorizontalCardProps extends IProduct {}

const ProductHorizontalCard: React.FC<IProductHorizontalCardProps> = props => {
  const {Colors} = useTheme();

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail' as never, {id: props?.id} as never)
      }
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderColor: Colors.secondary[300],
        borderWidth: 1,
        marginBottom: 16,
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 8,
        minHeight: 120,
      }}>
      <Image
        source={{uri: props.imagePath as any}}
        style={{width: 120, height: 80}}
      />
      <View style={{maxWidth: '60%', marginLeft: 16}}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 16,
            color: Colors.secondary[600],
            fontWeight: '600',
          }}>
          {props.name}
        </Text>
        {/* <Text>{props.currentPrice?.toString().prettyMoney() || ''}</Text> */}
        <View style={{marginTop: 8, flexDirection: 'row'}}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: Colors.secondary[500],
              fontWeight: '500',
            }}>
            Giá khởi điểm
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: Colors.secondary[600],
              fontWeight: 'bold',
              marginLeft: 8,
            }}>
            ${props.startPrice?.toString().prettyMoney()}
          </Text>
        </View>
        <View style={{marginTop: 8, flexDirection: 'row'}}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: Colors.secondary[500],
              fontWeight: '500',
            }}>
            Được bán bởi:
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: Colors.primary[500],
              fontWeight: 'bold',
              marginLeft: 8,
            }}>
            {(props as any)?.username}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductHorizontalCard;
