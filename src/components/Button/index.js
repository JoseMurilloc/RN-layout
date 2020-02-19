import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Button({ name, type, style }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        type ? styles[`button-${type}`] : {},
      ]}> 

      <Text style={[
        styles.text,
        type ? styles[`text-${type}`] : {},
      ]} >
        { name }
      </Text>

    </TouchableOpacity>
  );
}
