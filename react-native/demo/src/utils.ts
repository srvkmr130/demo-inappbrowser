import {Alert, Linking, Platform} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

export const getDeepLink = (path = '') => {
  const scheme = 'my-demo';
  const prefix =
    Platform.OS === 'android' ? `${scheme}://demo/` : `${scheme}://`;
  return prefix + path;
};
export const onReadBlogButtonHandler = async () => {
  const uri =
    'https://javascript.plainenglish.io/react-native-new-architecture-old-vs-new-d0130f42bc79';
  if (await InAppBrowser.isAvailable()) {
    InAppBrowser.open(uri, {
      enableUrlBarHiding: true,
      enableDefaultShare: false,
      showInRecents: true,
    });
  } else {
    Linking.openURL(uri);
  }
};

export const onReadNewsButtonHandler = async () => {
  const uri = 'https://www.ndtv.com/topic/news-feed';
  if (await InAppBrowser.isAvailable()) {
    InAppBrowser.open(uri, {
      enableUrlBarHiding: true,
      enableDefaultShare: false,
      showInRecents: true,
    });
  } else {
    Linking.openURL(uri);
  }
};
export const OnSendDataHandler = async (numValue: number) => {
  const uri = `http://192.168.29.100:3000/${+numValue}`;
  if (await InAppBrowser.isAvailable()) {
    InAppBrowser.open(uri, {
      enableUrlBarHiding: true,
      enableDefaultShare: false,
      showInRecents: true,
      headers: {
        'my-custom-header': 'my custom header value',
      },
    });
    Alert.alert(JSON.stringify(+numValue));
  } else {
    Linking.openURL(uri);
  }
};
export const tryDeepLinking = async (updateValue: () => void) => {
  const loginUrl = 'http://192.168.29.100:3000/redirect/';
  const redirectUrl = getDeepLink();
  console.log('redirectUrl', redirectUrl);
  const url = `${loginUrl}${encodeURIComponent(redirectUrl)}`;
  try {
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.openAuth(url, redirectUrl, {
        // iOS Properties
        ephemeralWebSession: false,
        // Android Properties
        showTitle: false,
        enableUrlBarHiding: true,
        enableDefaultShare: false,
      });
      if (result.type === 'success') {
        Alert.alert('Response', JSON.stringify(result));
        updateValue();
      }
    } else {
      Alert.alert('InAppBrowser is not supported :/');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Something’s wrong with the app :(');
  }
};
