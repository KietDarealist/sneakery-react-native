import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, Text} from 'react-native';
import useTheme from '../../../hooks/useTheme';

interface IProductCardProps {}

const ProductCard: React.FC<IProductCardProps> = props => {
  const {Colors} = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: 'white',
        width: '100%',
        height: 210,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: Colors.secondary[200],
        marginBottom: 12,
      }}>
      <Image
        style={{width: '100%', height: 100}}
        source={{
          uri: 'https://sneakery.vercel.app/_next/image?url=https%3A%2F%2Fimages.stockx.com%2F360%2FAir-Jordan-1-Retro-High-Dior%2FImages%2FAir-Jordan-1-Retro-High-Dior%2FLv2%2Fimg01.jpg%3Ffm%3Davif%26auto%3Dcompress%26w%3D768%26dpr%3D2%26updated_at%3D1635189753%26h%3D512%26q%3D75&w=3840&q=75',
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 14,
          textAlign: 'center',
          fontWeight: 'bold',
          color: Colors.secondary[500],
          marginTop: 8,
        }}>
        Jordan Dior Travis
      </Text>
      <Text
        numberOfLines={1}
        style={{
          fontSize: 12,
          textAlign: 'center',
          fontWeight: 'normal',
          color: Colors.secondary[500],
          marginTop: 8,
        }}>
        Được bán bởi: Mai Nhi
      </Text>
      <Text
        numberOfLines={1}
        style={{
          fontSize: 12,
          textAlign: 'center',
          fontWeight: 'bold',
          color: Colors.primary[500],
          marginTop: 8,
        }}>
        $500
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
