import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import Button from '../Button';

export default function SubHeader() {
  return (
    <View style={styles.container}> 
      <Image source={{ uri: 'https://f.i.uol.com.br/fotografia/2019/05/18/15582127155ce0706b11ffb_1558212715_3x2_md.jpg' }} 
        style={styles.avatar}
      />

      <View style={styles.profileInfor}>
        <Text style={styles.name}>Gustavo Bertoni</Text>
        <Text style={styles.bio}>Head de programação na Rocketseat em live de layout</Text>
      
        <View style={styles.buttonContainer}>
          <Button style={styles.firstButton} name="Messagem" />
          <Button type="outline" name="Seguir" />
        </View>
      
      </View>

    </View>
  );
}
