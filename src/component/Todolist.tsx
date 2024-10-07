import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Todolist = () => {

  const [value, setValue] = useState()
  const addFunc =()=>(


  )
  return (
    <View style={styles.wrapperStyle} >
      <Text style={styles.headingStyle} > What will you be doing today?</Text>
      <View style={styles.styleMainbox}>
        <Text >{value ?? 'Laundry'}</Text>
      </View>
      
      <TextInput style={styles.inputboxStyle} placeholder='fill info' onChangeText={value ()=>()}/>
      <TouchableOpacity style={styles.submitStyle} onPress={addFunc} ><Text>submit</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle:{
marginTop:30,
fontSize:20,
fontWeight:'bold',

  },
  wrapperStyle:{
paddingHorizontal:20,
rowGap:20,

  },
  styleMainbox: {
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'green',
  padding:10,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius:20,
  },
  inputboxStyle:{
    padding:10,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius:20, 
  },
  submitStyle:{
    padding:10,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius:20, 
    textAlign:'center',
  }
});

export default Todolist;
