import React, {useState, useEffect} from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Network from 'expo-network';


export default function App () {
  
  // State variable to contain Ip address
  const [IP, setIP] = useState("Push button to get IP address of device");
  const [MAC, setMAC] = useState("Push button to get MAC address of device");
  const [Connected, setConnected] = useState({bool: true});
  // State variable to display if access denied
  const [errorMessage, setErrorMessage] = useState("");

  // Runs after every render 
  useEffect(()=>{
    isConnectedAsync()
  })

  // Function for checking internet connection
  const isConnectedAsync = async () => {
    let { isConnected } = await Network.getNetworkStateAsync();
    setConnected(isConnected);
  }

  // Check for awailable network and if, it gets the IP address
  const getIp = async () => {   
    if(Connected)
    {
      let IPaddress = await Network.getIpAddressAsync();
      setIP(IPaddress);
    }
    else
      setIP("Device is not connected to any network");
  };

  const getMAC  = async () => {
    // Get permission for app to use locations
    let { status } = await Permissions.ACCESS_WIFI_STATE();
    if (status !== 'granted') {
      // Change state for 'errorMessage' variable
      setErrorMessage('Permission to access MAC address was denied');
    }
    let mac = await Network.getMacAddressAsync("eth0");
    setMAC(mac);
  }

  return (
    <View style={styles.container}>
      <Button 
      title={"IP Address"}
      onPress={getIp} /> 
      <Text style={styles.heading2}>{IP}</Text> 
      <Button 
      title={"MAC Address"}
      onPress={getMAC} /> 
      <Text style={styles.heading2}>{MAC}</Text>   
    </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading1:{
    color:"#000",
    fontWeight:"bold",
    fontSize:30,
    margin:20
  },
  heading2:{
    color:"#000",
    margin:5,
    fontWeight:"bold",
    fontSize:15
  },
});
