import { StyleSheet } from 'react-native';
import { CDGColor } from '../../common/constants/CDGColor';

export const Style = StyleSheet.create(
  (styles = {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'white'
    },
    topContainer: {
      padding: 36,
      paddingBottom: 30,
      justifyContent: 'space-around'
    },
    ButtonPrime: {
      backgroundColor: CDGColor.Prime,
      borderWidth: 0
    },
    textInput: {
      backgroundColor: CDGColor.LightBackground,
      height: 30,
      width: 255,
      borderRadius: 4,
      textAlign: 'center',
      fontSize: 14
    },
    bottomBox: {
      position: 'absolute',
      left: 12,
      right: 12,
      padding: 24,
      bottom: 0,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    ButtonText: {
      fontWeight: '900',
      color: '#ffffff'
    }
  })
);
