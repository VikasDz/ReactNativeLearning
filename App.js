import {Text, View, StyleSheet,StatusBar } from 'react-native';
import ButtonReact from './src/screens/ButtonReact';
import CustomComponent from './src/screens/CustomComponets'
import FlatListDemo from './src/screens/FlatListDemo';
import ImagesAdding from './src/screens/ImagesAdding';
import TouchableOpacitys from './src/screens/TouchableOpacitys';
import NetflixCard from './src/components/NetflixCard';
import { 
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic ,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "@expo-google-fonts/josefin-sans";
import AppLoading from 'expo-app-loading'; 



export default function App() {

  let [fontsLoad, error] = useFonts({
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic ,

  });

  if(!fontsLoad){
    return <AppLoading/>
  }
  return (
    <View>
      <Text style={styles.textStyle}> Welcome To ReactNative Series ✌</Text>
      {/* <CustomComponent></CustomComponent> */}
      {/* <FlatListDemo></FlatListDemo> */}
      {/* <ImagesAdding></ImagesAdding> */}
      {/* <ButtonReact></ButtonReact> */}
      {/* <TouchableOpacitys></TouchableOpacitys> */}
      <NetflixCard></NetflixCard>
      <StatusBar></StatusBar>
    </View>
  );
}


//Creating StyleSheet 
const styles = StyleSheet.create({
  textStyle:{
    color: "purple",
    fontFamily :"JosefinSans_200ExtraLight",
    textAlign : "center",
    fontSize : 20,
    fontWeight :'bold',
  
   
  },
});
