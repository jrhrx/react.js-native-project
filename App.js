import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native';
import  {Component} from 'react';
export default class App extends Component {
  constructor(props)
  {
     super(props);
     this.state={Weight:0,Age:0,Height:0};
  }
  BMRM=()=>
  {
    var W=parseInt(this.state.Weight);
    var A=parseInt(this.state.Age);
    var H=parseInt(this.state.Height);

    var WAHM= BMR = 88.362 + (13.397 *W) + (4.799 * H) - (5.677 * A );
    
    alert(WAHM);
    
  }
  BMRF=()=>
  {
    var W=parseInt(this.state.Weight);
    var A=parseInt(this.state.Age);
    var H=parseInt(this.state.Height);

    var WAHF=BMR = 447.593 + (9.247 *W) + (3.098  * H) - (4.330 * A );
    
    Alert.alert(WAHF,  "This is your calories"
      );
    
  }
 
  render()
  {return (
    <View>
      <View>
       <Text  style={styles.t0}>MyHealth</Text>
      </View>
      <View>
      <View style={{backgroundColor:"black"}}>
      <Text  style={styles.t1}>BMR Calculator</Text>
      <View>
        <View style={styles.v1}>
        <Text style={styles.font}>Weight(Kg):</Text>
          <TextInput 
            style={styles.ti1}
            placeholder="Enter Weight" 
            onChangeText={Weight=>this.setState({Weight})}>
          </TextInput>
        </View>
        <View style={styles.v2}>
        <Text style={styles.font}>Age(Year):</Text>
          <TextInput 
            style={styles.ti1}
            placeholder="Enter Age"
            onChangeText={Age=>this.setState({Age})}> 
          </TextInput>
        </View>
          <View style={styles.v3}>
          <Text style={styles.font}>Height(Cm):</Text>
          <TextInput 
            style={styles.ti1}
            placeholder="Enter Height" 
            onChangeText={Height=>this.setState({Height})}>
          </TextInput>
          </View>
        </View>
      </View>
     <View style={{backgroundColor:"black"}}>
     <View style={styles.button2} >
      <Button title="Male"onPress={this.BMRM} />
      </View>

      <View style={styles.button1}>
      <Button title="Female" onPress={this.BMRF}/>
      </View> 
     </View>
      </View>
     </View>
  
  );
}
}

const styles = StyleSheet.create({
  t0:{
    color:'white',
    marginTop:20,
    textAlign:'center',
    fontSize:50,
    backgroundColor:"tomato",
    
  },
  t1:{
    color:'white',
    marginTop:50,
    textAlign:'center',
    fontSize:30,
    fontStyle:'italic'
    
  },
  ti1:{
    borderWidth:1,
    height: 60,
    borderColor: "white",
    width:200,
    justifyContent:"center",
    textAlign:"center",
    borderRadius:10,
    color:"black",
    backgroundColor:"white",
    fontSize:20
   },

  v1:{
    flexDirection:'row',
    marginLeft:30, 
    alignItems: 'center',
    margin:10,
    justifyContent:"space-evenly"
  },
  v2:{
    flexDirection:'row',
    marginLeft:40,
    alignItems: 'center',
    margin:10,
    justifyContent:"space-evenly"
     
  },
  v3:{
    flexDirection:'row',
    marginLeft:30,
    alignItems: 'center',
    margin:10,
    justifyContent:"space-evenly",
    
  },
  button2:{
    margin:30,
    flexDirection: 'column',
    
  },

  button1:{
    marginTop:10,
    marginLeft:30,
    marginRight:30,
    flexDirection: 'column',
    marginBottom:100
  },
  font:{
    color:'white',
    fontSize:20
  }
});
