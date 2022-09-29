import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30,
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  urlInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#6394f7',
  },
  text: {
    color: '#cad2e3',
    fontSize: 18,
    fontWeight: '600',
  },
  conatiner: {
    backgroundColor: '#dfe2e8',
    width: width,
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex',
  },
  btnContainer: {
    backgroundColor: '#b6b8ba',
    height: 200,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginTop: 40,
    justifyContent: 'center',
  },
  sendBtnContainer: {
    backgroundColor: '#b6b8ba',
    height: 280,
    marginTop: 50,
    paddingHorizontal: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6f94de',
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    marginTop: 15,
    minWidth: 200,
    shadowColor: 'black',
  },
  inputTextContainer: {
    borderWidth: 2,
    borderColor: '#747e8f',
    width: 100,
    margin: 20,
    backgroundColor: '#d2d2d4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  inputText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  height: {
    height: 200,
  },
});
