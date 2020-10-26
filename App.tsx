import NetInfo from '@react-native-community/netinfo';
import React, {useState, useEffect} from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles"

export default function App () {

const [isInternetReachable, setIsInternetReachable] = useState(false);
const [strength, setStrength] = useState(0);
const [type, setType] = useState("");
const [ip, setIp] = useState("");
const [icon, setIcon] = useState("wifi-strength-off");


useEffect(() => {
  NetInfo.addEventListener(state => {
    setStrength(state.details.strength);
    setIsInternetReachable(state.isInternetReachable);
    setType(state.type);
    setIp(state.details.ipAddress)
    setIcon(getNetworkIcon());
  });
});

const getNetworkIcon=()=> {
  if(!strength)
    return "wifi-strength-off"
  else if (Number(strength) <= 40) 
    return "wifi-strength-1"
  else if (Number(strength) <= 60) 
    return "wifi-strength-2"
  else if (Number(strength) <= 80) 
    return "wifi-strength-3"
  else if (Number(strength) <= 100) 
    return "wifi-strength-4"
  else if(!isInternetReachable)
    return "network-strength-outline"
  else
    return "error";
}

return (
  <View style={styles.container}>
    <Text style={styles.heading1}>Type of network: {type}</Text>
    <MaterialCommunityIcons name={icon} size={125}/> 
    <Text style={styles.heading2}>Network strength: {strength}</Text>
    <Text style={styles.heading2}>Device ip: {ip}</Text>  
  </View>
  );
}
