import { StyleSheet, Dimensions } from 'react-native';

import {
  colors,
  metrics,
  fonts
} from '../../styles';

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    marginBottom: metrics.padding,
    width: (width - 45) / 2, // 45 basicamente e padding total já aplicado
  
    padding: metrics.padding,
  },

  checkIcon: {
    position: 'absolute',
    right: metrics.padding,
    color: colors.primary,
    top: metrics.padding,
    zIndex: 1,
  },

  imageContainer: {
    padding: metrics.padding,
  },

  infoContainer: {
    borderColor: colors.lighter,
    borderTopWidth: 1,
    color: colors.light,
  },

  img: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darcker,
  },
  description: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: fonts.smaller,
  },

  price: {
    textAlign: 'center',
    color: colors.light,
    fontSize: fonts.regular,
    marginTop: 5,
  }
});

export default styles;