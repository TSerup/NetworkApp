// import all the components we are going to use
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import React, {useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import styles from "./styles";
import IpButton from './src/IP_Button';

export default function App () {

  const [type, setType] = useState("");
  const [ip, setIp] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [strength, setStrength] = useState(0);

  const getNetInfo = () => {
     // To get the network state once
     NetInfo.fetch().then((state) => {
      setType(state.type);
      setIp(state.details.ipAddress);
      setStrength(state.details.strength);
      setIsConnected(state.isConnected);
    });
  }

  const StartScreen = () => {
    getNetInfo();
    let str = "Device is not connected to any network!"
    if(isConnected)
      str = "Device is connected to " + type + ".";
    return(
      <View style={styles.container}>
        <Text style={styles.header1}>Network info</Text>
        <Text style={styles.header2}>{str}</Text>
        <Text style={styles.header2}>Press loupe for more info...</Text>
        <View style={{marginTop: 70}}>
          <TouchableOpacity onPress={toggleInfoScreen}>
            <Entypo name="magnifying-glass" size={300} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleOpenWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.whatismyip.com/my-ip-information/?iref=homegb')
  };

  const InfoScreen = () => {
    getNetInfo();
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleInfoScreen} style={styles.closeButtonArea}>
          <Ionicons name="md-close-circle" style={styles.closeButton}></Ionicons>
        </TouchableOpacity>
        <Entypo name="network" size={55} color="#0fd" />
        <Text style={styles.infoText}>Connection type: {type}</Text>
        <MaterialIcons name="network-check" size={55} color="#0fd" />
        <Text style={styles.infoText}>Network strength: {strength}</Text>
        <Entypo name="address" size={55} color="#0fd" />
        <Text style={styles.infoText}>IP address: {ip}</Text>
        <MaterialIcons name="public" size={55} color="#0fd" />
        <IpButton onPress={handleOpenWebBrowser}/>
      </View>
    );
  }

  // Function for returning from preview
  const toggleInfoScreen = async () => {
    isInfo === false
      ? setIsInfo(true)
      : setIsInfo(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
       {!isInfo && StartScreen()}
       {isInfo && InfoScreen()}
      </View>
    </SafeAreaView>
  );
};



