import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ImageBackground,
    Button,
    Alert,
  } from 'react-native';
  const img = require('../Image/raibow2.jpg')
const AvoidView = () => {

const buttonFun =()=>{
  Alert.alert('Hello Button')
}


  return (

  <View style={{flex: 1, }}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent:'flex-end',
        }}
        resizeMode="cover"
        source={img}>

            {/* wrap 3 input */}
            <KeyboardAvoidingView behavior='padding'
            style={{
                flex: 0.5,   
                backgroundColor: 'orange',
                alignItems: 'center',
                justifyContent: 'center',
                position:'absolute',
                width:'100%'
              }}>
      
          <TextInput style={styles.styleInputBoxButton} placeholder="Email" />

          <TextInput
            style={styles.styleInputBoxButton}
            placeholder="Password"
          />

          <TouchableOpacity style={styles.styleInputBoxButton}>
            <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
              Click Me
            </Text>
        
          </TouchableOpacity>

{/* New oct 16 */}
<Button
          title="Right button"
          //first -no function
          // onPress={() => Alert.alert('Right button pressed')
//second way - with function
          onPress={buttonFun}

       
        />



          <Text style={{alignSelf: 'center', marginVertical: 10}}>
            Forget Password
          </Text>
   
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  styleInputBoxButton: {
    // height: 40,
    flex: 0.15,
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: 'center',
    width: '90%',
    marginBottom: 10,
  },
});


export default AvoidView