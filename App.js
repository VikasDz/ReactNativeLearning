import {Text, View, StyleSheet,StatusBar } from 'react-native';
import CustomComponent from './src/screens/CustomComponets'
import FlatListDemo from './src/screens/FlatListDemo';
import ImagesAdding from './src/screens/ImagesAdding';


//Creating StyleSheet 
const styles = StyleSheet.create({
  textStyle:{
    color: "red",
    textAlign : "center",
    
  },
});

export default function App() {

  return (
    <View>
      <Text style={styles.textStyle}> Welcome To ReactNative Series </Text>
      {/* <CustomComponent></CustomComponent> */}
      {/* <FlatListDemo></FlatListDemo> */}
      <ImagesAdding></ImagesAdding>
      <StatusBar></StatusBar>
    </View>
  );
}


