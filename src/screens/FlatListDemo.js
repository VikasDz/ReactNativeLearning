import { Text, FlatList,StyleSheet } from "react-native";
import React from "react";


const FlatListDemo = () => {
    const names = [
        {
          name: "SatYam❣",
        },
        {
          name: "Pooja🥺",
        },
        {
          name: "Momo❤",
        },
      ];

const styles3 = StyleSheet.create({
  textStyle:{
    color: "black",
    textAlign : "center",
    fontSize : 20,
    
  },
});
      
    return (
     <FlatList
        data = {names}
        renderItem = {(element) => {
          console.log(element.item.name);
       return <Text style={styles3.textStyle}> {element.item.name}</Text>
     }}
     />
    );
};

export default FlatListDemo;
