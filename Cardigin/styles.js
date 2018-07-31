import { StyleConst, CDGColor } from './common/constants/const';

export default (styles = {
  container: {
    flex: 1
  },
  gap: {
    height: 8
  },
  titleBox: {
    paddingTop: 108,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  loginBox: {
    paddingTop: 48,

    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  largeTitle: {
    color: CDGColor.Prime,
    fontSize: 48,
    fontWeight: '900'
  },
  secondaryTitle: {
    color: CDGColor.LightGray,
    fontSize: 20,
    fontWeight: '900'
  },
  textInput: {
    backgroundColor: CDGColor.LightBackground,
    height: 30,
    width: 255,
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 14
  },
  grayLabel: {
    color: CDGColor.LightGray,
    fontFamily: 'Product Sans',
    fontWeight: 'bold',
    fontSize: 17
  },
  smallLabel: {
    color: CDGColor.LightGray,
    textAlign: 'center',
    fontFamily: 'Product Sans',
    fontWeight: 'bold',
    fontSize: 12
  },
  bottomBox: {
    padding: 24,
    paddingBottom: 30,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  ButtonPrime: {
    backgroundColor: CDGColor.Prime,
    borderWidth: 0
  },
  ButtonText: {
    heigth: 50,
    fontWeight: '900',
    color: '#ffffff'
  }
});
