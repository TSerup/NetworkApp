import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import styles from './styles';
import axios from 'axios';

const PublicIp = () => {
  const[data, setData] = useState("");

  useEffect(()=> {
      // Run function once  
      fetchIp();
  },[])

  // Function for fetching my public IP-address
  const fetchIp = async () => {
    const result = await axios('https://api.ipify.org?format=json',); 
    // Only has IP as topic
    setData(result.data.ip);
  };

    return ( 
      <Text style={styles.infoText}>
        Public IP: {data}
      </Text>
    )
}

export default PublicIp;
