import { View, Text, StyleSheet, Image, Button,Linking } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 40,
  },
  imageStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: "center",
  },
  poster_info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster_title: {
    fontSize: 20,
    marginBottom: 10,
  },
  poster_text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 20,
  },
});
const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Card</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/05/box-office-kgf-chapter-2-hindi-rises-all-over-again-on-saturday-continues-to-build-on-its-record-total-001.jpg",
          }}
        />
    
      <View style={styles.poster_info}>
          <Text style={styles.poster_title}>
              KGF 2
          </Text>
          <Text style={styles.poster_text}>
          After scoring a spectacular record of entering the 400 Crore Club, KGF: Chapter 2  has continued its onwards journey by going past the 5 crores mark again. The film brought in 5.75 crores* more, which is a good improvement over the numbers that it had fetched the day before [3.85 crores]. Friday was it as it is quite good and now with Saturday showing further jump in numbers, there is a clear indication that the film is not done as yet and it has a few more weeks where it will continue to perform in a rather uninterrupted manner.
          </Text>
          
      </View>
      <Button style = {styles.buttonStyle}
      title="Watch Now"
      onPress={ () => Linking.openURL('https://www.youtube.com/watch?v=Qah9sSIXJqk')}
      >

      </Button>
      </View>
    </View>
  );
};

export default NetflixCard;
