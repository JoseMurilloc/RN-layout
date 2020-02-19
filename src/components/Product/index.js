import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

export default function Product({ product: { image, title, description, price } }) {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-checkmark-circle-outline" size={24} style={styles.checkIcon} />
      
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.img} />
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.description}>{ description }</Text>
        <Text style={styles.price}>{ price }</Text>
      </View>
    </View>
  );
}
