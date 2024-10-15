import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TodoAgain = () => {

const [singleItem, setsingleItem] = useState('')
const [allItem, setallItem] = useState([])
  const addItemFunc =()=>{
setallItem([...allItem, singleItem]);
setsingleItem('')
  }
  return (
    <View style={styles.wrapper}>
{/* logo section */}
      <View style={styles.logoSection}>
<Text>Logo</Text>
      </View>

<View style={styles.wrapMiddleBox}>
      <Text style={{textAlign:'center', fontWeight:'bold', paddingVertical:20,}}>What we are doing today?</Text>
    {
allItem.map((value,index)=>

  <View style={styles.singleBox}key={index}>
  <Text style={styles.textSingleBox}>{value}</Text>
        </View>
)
    }
  </View>
    
      {/* section bottom */}
      <View style={styles.bottomSection}>
        <View style={styles.wrapinputbutton}>
<TextInput style={styles.inputStyle} value={singleItem} onChangeText={(text=>setsingleItem(text))} />
<TouchableOpacity style={styles.buttonStyle} onPress={addItemFunc}><Text>add Button</Text></TouchableOpacity>
</View>
     </View>

    </View>
  );
};

const styles = StyleSheet.create({
    wrapper:{
flex:1,
height:'100%',
backgroundColor:'lightgreen',
    },
    logoSection:{
      // flex:0.10,
      height:'10%',
      backgroundColor:'purple',
      justifyContent:'flex-end'
    },
    wrapMiddleBox:{
// flex:0.70,
height:'70%',
backgroundColor:'pink',
    },
    singleBox:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'green',
      padding: 15,
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 20,
      marginVertical:10,

    },
    textSingleBox:{
      width:'70%',
      backgroundColor:'green',
   

    },
    // main wrap bittom and input box
    bottomSection:{
// flex:0.20,
height:'20%',
width:'100%',
backgroundColor:'grey',


    },
    wrapinputbutton:{
width:'100%',
flexDirection:'row',
justifyContent:'space-around',
// alignItems:'center',
alignItems:'flex-end',
    },
    inputStyle:{
width:'70%',
backgroundColor:'pink',
borderWidth:3,
borderRadius:30,
borderColor:'grey',
paddingVertical:20,
    },
    buttonStyle:{
      backgroundColor:'green',
      borderWidth:3,
      width:100,
      height:100,
borderRadius:50,
borderColor:'grey',
alignItems:'center',
justifyContent:'center'

    }


})
export default TodoAgain;
