import {Text, View, StyleSheet, StatusBar } from 'react-native';


//Creating StyleSheet 
const styles = StyleSheet.create({
  textStyle:{
    color: "black",
    textAlign : "center",
    
  },
});

export default function App() {
  return (
    <View>
      <Text style={styles.textStyle}> Import & Export Custom Component</Text>
      <StatusBar></StatusBar>
    </View>
  );
}


