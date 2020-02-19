import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-arrow-back" size={24} style={styles.icon} />
      <Text style={styles.title}>Profile</Text>
      <Ionicons name="ios-more" size={24} style={styles.icon} />
    </View>
  );
}
