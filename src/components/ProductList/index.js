import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Product from '../Product'

import styles from './styles';

export default function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://www.adolfoturrion.com.br/image/cache/data/sapatos/2018/femininos/brogues/brogue-baeza-cafe/sapato-feminino-brogue-baeza-cafe-1-550x550.jpg',
      title: 'Acne Studios',
      description: 'Andrea nappa dusty pink',
      price: 'R$50,00',
    },
    {
      id: 2,
      image: 'https://i.ebayimg.com/images/g/w~cAAOSwq5dcf9MJ/s-l400.jpg',
      title: 'Acne Studios',
      description: 'Lain pop sky blue',
      price: 'R$70,00',
    },
    {
      id: 3,
      image: 'https://www.adolfoturrion.com.br/image/cache/data/sapatos/2018/femininos/brogues/brogue-baeza-cafe/sapato-feminino-brogue-baeza-cafe-1-550x550.jpg',
      title: 'Acne Studios',
      description: 'Andrea nappa dusty pink',
      price: 'R$30,00',
    },
    {
      id: 4,
      image: 'https://i.ebayimg.com/images/g/w~cAAOSwq5dcf9MJ/s-l400.jpg',
      title: 'Acne Studios',
      description: 'Lain pop sky blue',
      price: 'R$70,00',
    }
  ]);

  return (
    <View style={styles.container}>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </View>
  );
}
