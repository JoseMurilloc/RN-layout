import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from './src/components/Header';
import SubHeader from './src/components/SubHeader';
import ProductList from './src/components/ProductList';
import Tabs from './src/components/Tabs';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
      <Header />
      <ScrollView>
        <SubHeader />
        <ProductList />
      </ScrollView>
      <Tabs />
    </View>
  );
}

