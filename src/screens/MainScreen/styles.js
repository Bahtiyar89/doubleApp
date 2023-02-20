import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wr: {
    alignSelf: 'center',
    marginTop: 30,
    width: '90%',
  },
  btn: {
    alignItems: 'flex-end',
    padding: 10,
  },
  img: {height: 30, width: 30},
  inp: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  clTxt: {
    alignItems: 'flex-end',
    padding: 10,
  },
  camTxt: {
    alignItems: 'flex-end',
    padding: 10,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000090',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 200,
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonTouchable: {
    padding: 16,
  },
  buttonText: {color: 'white', padding: '12%'},
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: 'white',
    backgroundColor: 'red',
  },
});

export default styles;
