import {Text, View, StyleSheet, StatusBar } from 'react-native';


//Creating StyleSheet 
const styles = StyleSheet.create({
  textStyle:{
    color: "blue",
    textAlign : "center",
    fontWeight : "bold",
    fontSize : 40,
    
  },
});
const styles2 = StyleSheet.create({
  textStyle:{
    color: "green",
    textAlign : "center",
    fontWeight : "bold",
    fontSize : 30,
    
  },
});
const styles3 = StyleSheet.create({
  textStyle:{
    color: "black",
    textAlign : "center",
    fontSize : 20,
    
  },
});

const Name = "SatYa"

export default function App() {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome To ReactNative Series</Text>
      <Text style={styles2.textStyle}>We Love ReactNative  Series</Text>
      <Text style={styles3.textStyle}>My Name is : {Name}</Text>
      <StatusBar></StatusBar>
    </View>
  );
}


