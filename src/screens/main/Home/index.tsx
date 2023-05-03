import useTheme from '../../../hooks/useTheme';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BrandCard} from '../../../components/molecules';
import ProductCard from '../../../components/molecules/ProductCard';
import ProductGrid from '../../../components/organisms/ProductGrid';

interface IHomeScreenProps {}

const Home: React.FC<IHomeScreenProps> = props => {
  const {Colors} = useTheme();
  return (
    <SafeAreaView style={{backgroundColor: Colors.secondary[50]}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 200}}
        style={{
          backgroundColor: Colors.secondary[50],
          height: '100%',
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}>
        <View style={{marginBottom: 24}}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: Colors.primary[600],
            }}>
            Sneakery
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'normal',
              color: Colors.secondary[600],
              marginTop: 4,
            }}>
            Chúng tôi có những đôi giày cực hiếm và cực đẹp, việc của bạn đưa ra
            mức giá hợp lý nhất để mang nó về nhà.
          </Text>
        </View>

        <BrandCard
          isReverse
          logo={require('../../../assets/images/NikeCaro1.jpeg')}
          title="Thương hiệu Nike"
          subTitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ad
          voluptas fugit corporis, dolorum voluptas fugit corporis, dolorum"
        />
        <ProductGrid products={[]} />
        <BrandCard
          title="Thương hiệu Adidas"
          subTitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ad
          voluptas fugit corporis, dolorum voluptas fugit corporis, dolorum"
          logo={require('../../../assets/images/AdidasCaro1.jpeg')}
        />
        <ProductGrid products={[]} />
        <BrandCard
          isReverse
          logo={require('../../../assets/images/LVCaro1.jpeg')}
          title="Thương hiệu LV"
          subTitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ad
          voluptas fugit corporis, dolorum voluptas fugit corporis, dolorum"
        />
        <ProductGrid products={[]} />
        <BrandCard
          title="Thương hiệu Adidas"
          subTitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ad
          voluptas fugit corporis, dolorum voluptas fugit corporis, dolorum"
          logo={require('../../../assets/images/PumaCaro1.webp')}
        />
        <ProductGrid products={[]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
