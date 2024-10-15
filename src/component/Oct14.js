import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const Oct14 = () => {
  return (
    <View style={{flex: 1,}}>
      {/* wrapper */}
    
        {/* first section */}
        <View style={{flex: 0.2, backgroundColor: 'orange'}}></View>

        {/* second section */}
        <View
          style={{
            flex: 0.6,
            backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'pink',
              paddingVertical: 30,
              borderRadius: 20,
              marginVertical: 20,
              width: '80%',
            }}>
            <Text>smallBox</Text>
          </View>
        </View>

        {/*  last input section */}
        <View style={{flex: 0.2, backgroundColor: 'brown'}}></View>

        {/* below end div wrapper */}
  
    </View>
  );
};

export default Oct14;
