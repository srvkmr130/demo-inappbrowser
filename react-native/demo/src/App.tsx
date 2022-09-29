import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {
  onReadBlogButtonHandler,
  onReadNewsButtonHandler,
  OnSendDataHandler,
  tryDeepLinking,
} from './utils';
import {styles} from './styles';

const App = () => {
  const [value, setValue] = useState(0);
  const [numValue, setNumValue] = useState<string>('0');

  const onChangeHandler = (val: string) => {
    setNumValue(val);
  };

  const updateValue = () => {
    setValue(prev => prev + 1);
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}>DEMO</Text>
      </View>
      <ScrollView>
        <View style={styles.conatiner}>
          <View style={styles.btnContainer}>
            <Pressable style={styles.btn} onPress={onReadBlogButtonHandler}>
              <Text style={styles.text}>Read Blog !</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={onReadNewsButtonHandler}>
              <Text style={styles.text}>Read News !</Text>
            </Pressable>
          </View>
          <KeyboardAvoidingView behavior="position">
            <View style={styles.sendBtnContainer}>
              <View style={styles.inputTextContainer}>
                <TextInput
                  value={numValue}
                  style={styles.inputText}
                  onChangeText={(val: string) => onChangeHandler(val)}
                />
              </View>

              <Pressable
                style={styles.btn}
                onPress={() => OnSendDataHandler(+numValue)}>
                <Text style={styles.text}>SEND DATA - {numValue}</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>

          <View style={styles.sendBtnContainer}>
            <View style={styles.inputTextContainer}>
              <View>
                <Text style={styles.inputText}>{value}</Text>
              </View>
            </View>

            <Pressable
              style={styles.btn}
              onPress={() => tryDeepLinking(updateValue)}>
              <Text style={styles.text}>Counter</Text>
            </Pressable>
          </View>
          <View style={styles.height} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
