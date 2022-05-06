import { Text, FlatList,StyleSheet } from "react-native";
import React from "react";


const FlatListDemo = () => {
    const names = [
        {

          index: "1",
          name: "SatYam❣",
        },
        {

          index: "2",
          name: "Pooja🥺",
        },
        {
          index: "3",
          name: "Momo❤",
        },
        {
          index: "4",
          name: "Misha❤",
        },
        {
          index: "5",
          name: "Anjali❣",
        },
      ];

const styles3 = StyleSheet.create({
  textStyle:{
    fontSize: 20,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",

  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});
      
    return (
     <FlatList
       keyExtractor={(key) => {
         return key.index;
       }}
      //  horizontal
      //  numColumns={2}
      //  showsHorizontalScrollIndicator={false}
      inverted
       
        data = {names}
        renderItem = {(element) => {
          console.log(element.item.name);
       return <Text style={styles3.textStyle}> {element.item.name}</Text>
     }}
     />
    );
};

export default FlatListDemo;
