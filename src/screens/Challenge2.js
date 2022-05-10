import { FlatList, Text, StyleSheet, View } from "react-native";
import React from "react";

const Challenge2 = () => {
  const Series = [
    {
      sname: "Iron Man ❤",
      Year: "2002",
      Author: "SatYam",
      img: "",
    },
    {
      sname: "Iron Man 2 ❣",
      Year: "2005",
      Author: "SatYam Raj",
      img: "",
    },
    {
      sname: "Iron Man 3 🥺",
      Year: "2012",
      Author: "SatYam Kumar",
      img: "",
    },
    {
      sname: "Bat Man ✔",
      Year: "2002",
      Author: "Raj Kundra",
      img: "",
    },
    {
      sname: "Spider Man 🔥",
      Year: "2002",
      Author: "Pooja Jha",
      img: "",
    },
  ];
  const styles3 = StyleSheet.create({
    textStyle: {
      fontSize: 25,
      padding: 10,
      backgroundColor: "yellow",
      color: "black",
      fontWeight: "bold",
      fontFamily: "JosefinSans_100Thin",
    },
    listStyle: {
      textAlign: "center",
      margin: 20,
      padding: 10,
    },
    boxStyle: {
      backgroundColor: "red",
      borderColor: "black",
    },
    ViewStyle: {
    
      backgroundColor: "yellow",
      fontFamily: "JosefinSans_100Thin",
      padding: 5,
      margin: 20,
    },
  });

  return (
    <FlatList
      style={styles3.listStyle}
      keyExtractor={(key) => {
        return key.sname;
      }}
      
    //   horizontal
   
      data={Series}
      renderItem={({ item }) => {
        return (
          <View style={styles3.ViewStyle}>
            <Text style={styles3.textStyle}>{item.sname}</Text>
            <Text style={styles3.textStyle}>{item.Author}</Text>
            <Text style={styles3.textStyle}>{item.Year}</Text>
          </View>
        );
      }}
    />
  );
};

export default Challenge2;
