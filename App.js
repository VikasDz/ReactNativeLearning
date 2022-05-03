import {Text, View, StyleSheet } from 'react-native';
import CustomComponent from './src/screens/CustomComponets'


//Creating StyleSheet 
const styles = StyleSheet.create({
  textStyle:{
    color: "red",
    textAlign : "center",
    
  },
});

export default function App() {

  const newWord = "Day-3"
  return (
    <View>
      <Text style={styles.textStyle}> Day_2 of React Native </Text>
      <CustomComponent></CustomComponent>
      <Text style={styles.textStyle}>{newWord}</Text> 
    </View>
  );
}


