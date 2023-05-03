import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

interface ISearchScreenProps {}

const Search: React.FC<ISearchScreenProps> = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Hello Search</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
