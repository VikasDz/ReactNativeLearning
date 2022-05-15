import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

const APIDemo = () => {
  const [myDataUser, setMyDataUser] = useState();
  const [isLoaded, setisLoaded] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch("https://gorest.co.in/public/v2/users");
      const myData = await response.json();
      setMyDataUser(myData);
      setisLoaded(false);
      console.log(myData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
              
              
              

    <FlatList
      data={myDataUser}
      renderItem={({ item }) => {
        return (
          <View>
            <View style={styles.Headers}>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/05/box-office-kgf-chapter-2-hindi-rises-all-over-again-on-saturday-continues-to-build-on-its-record-total-001.jpg",
                }}
              />
              <Text style={styles.textStyle}>Name : {item.name}</Text>
              <Text style={styles.textStyle}>Email : {item.email}</Text>
              <Text style={styles.textStyle}>Gender : {item.gender}</Text>
              <Text style={styles.textStyle}>Status : {item.status}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "black",
    fontFamily: "JosefinSans_200ExtraLight",
    textAlign: "center",
    fontWeight: "bold",
  },
  Headers: {
    backgroundColor: "#97BC62FF",
    borderColor: "#2C5F2D",
    color: "#2C5F2D",
    marginTop: 30,
    fontSize: 5,
    paddingVertical: 30,
    textAlign: "center",
    borderWidth: 5,
    bordercolor: "red",
    marginBottom: 30,
    marginHorizontal: 50,
  },
  imageStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20,
  },
});

export default APIDemo;
