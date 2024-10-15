import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Todolist = () => {
  const [singleItem, setSingleItem] = useState<string>('')
  const [allItem, setAllItem] = useState<any>([])
  const addFunc =()=>{
    setAllItem([...allItem, singleItem]);
setSingleItem('');
}

// read keyboard avoidibg view
  return (
    
    <View style={styles.wrapperStyle}>
      <Text style={styles.headingStyle}> What will you be doing today?</Text>

      {
        // map thorugh array of string
      allItem.map((value: string,index: number)=>
        <View style={styles.styleMainbox} key={index}>
      <Text >{value}</Text>
       {/* <Text >laundry</Text> */}
    </View>
    
    )



      }
      

<View style={styles.wrapinputButton}>
  {/* capture the text from input box--text xan be anything--put text in singleItem variable */}
      <TextInput value ={singleItem} style={styles.inputboxStyle} placeholder="fill info" onChangeText={text=>setSingleItem(text)}/>

      {/* onChange={(event: any) => console.log(event.target.value)} for react*/}
      {/* onChangeText={text => handleText(text)} for native react */}

      <TouchableOpacity style={styles.submitStyle} onPress={addFunc}>
        <Text>+</Text>
      </TouchableOpacity>
      </View>
      {/* onPress={addFunc} */}
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapperStyle: {
    paddingHorizontal: 20,
    rowGap: 20,
    position: 'relative',
backgroundColor:'lightblue',
height:'100%',
  },
  styleMainbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    padding: 15,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 20,
  },
  inputboxStyle: {
    padding: 10,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 20,
    width:'85%',
  },
  submitStyle: {
    borderColor: 'red',
    borderWidth: 2,
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,

  },
  wrapinputButton:{
    position: 'absolute',
   bottom: 40,
    left:20,
    flex:1,
    flexDirection: 'row',
  
   
   
  }
});

export default Todolist;


