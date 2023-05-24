import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#352163',
    flexDirection: 'column',
  },
  imgView: {
    alignItems: 'center', height: 300, width: 300, flex: 0.5
  },
  img: {
    marginLeft: 60,
    marginTop: 50,
  },
  textView: {
    backgroundColor: 'white', flex: 0.65, width: '100%', borderTopStartRadius: 200, borderTopEndRadius: 200
  },
  text1: {
    color: '#352163',
    marginTop: 150,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    color: '#352163',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text3: {
    color: 'grey',
    marginTop: 30,
    textAlign: 'center',
    fontSize: 16,
  },
  text4: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 16,
  },

  next: {
    padding: 10,
    fontSize: 30,
    position: 'absolute',
    backgroundColor: '#352163',
    bottom: 5,
    right: 60,
    borderRadius: 20

  }
});
export default styles;