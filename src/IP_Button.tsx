import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import styles from './styles';

const handleOpenWebBrowser = () => {
  WebBrowser.openBrowserAsync('https://www.ipify.org')
};

const IpButton = () =>{
  return(
    /* Custom Button */
    <TouchableOpacity
    style={styles.customBtnBG}
    onPress={handleOpenWebBrowser}>
    <Text style={styles.customBtnText}>(See API documentation here)</Text>
  </TouchableOpacity>
  );
}

export default IpButton;