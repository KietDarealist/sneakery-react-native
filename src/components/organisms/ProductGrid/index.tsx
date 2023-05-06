import React from 'react';
import {View} from 'react-native';
import ProductCard from '../../molecules/ProductCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import useTheme from '../../../hooks/useTheme';

interface IProductGridProps {
  products: IProduct[];
}

const ProductGrid: React.FC<IProductGridProps> = props => {
  const {Colors} = useTheme();
  const {products} = props;
  return (
    <View style={{marginBottom: 16}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {products.map((product, index) => {
          if (index <= 3) {
            return <ProductCard {...product} />;
          }
        })}
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            marginHorizontal: 'auto',
            width: 100,
            marginVertical: 12,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.primary[500],
            paddingVertical: 12,
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: Colors.primary[500],
              fontWeight: '600',
            }}>
            Xem tất cả
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductGrid;
