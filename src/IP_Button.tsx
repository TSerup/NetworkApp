import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const IpButton = ({onPress}:any) =>{
  return(
    /* Custom Button */
    <TouchableOpacity
    style={styles.customBtnBG}
    onPress={onPress}>
    <Text style={styles.customBtnText}>Public IP-address: Press here</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  /* Here style the text of your button */
  customBtnText: {
    fontSize: 22,
    color: "#fff",
    marginTop: -20,
    marginLeft: -10,
    textAlign: 'left',
    paddingVertical: 20,
    fontFamily: 'sans-serif-light',
},
  /* Here style the background of your button */
  customBtnBG: {
    backgroundColor: "#233",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10
}
});

export default IpButton;