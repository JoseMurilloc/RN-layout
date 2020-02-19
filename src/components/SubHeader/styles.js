import { StyleSheet } from 'react-native';

import {
  colors,
  metrics,
  fonts
} from '../../styles';


const styles = StyleSheet.create({
  avatar: {
    height: 68,
    width: 68,
    borderRadius: 34,
    marginRight: 15,
  },
  
  container: {
    padding: metrics.padding,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.light,

    flexDirection: 'row',
  },

  profileInfor: {
    flex: 1,
  },

  name: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.darker,
    marginTop: 5,
  },

  bio: {
    fontSize: fonts.regular,
    color: colors.regular,
    marginBottom: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

    
  firstButton: {
    marginRight: 10,
  },

});

export default styles;