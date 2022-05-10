import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const AddMultipleStyle = () => {
  return (
    <View style={[styles.parentView, styles.commonStyle]}>
      <Text style={[styles.childText, styles.commonStyle]}>SatYam🥺</Text>
      <Text style={[styles.childText2, styles.commonStyle]}>Kulfi ✔</Text>
      <Text style={[styles.childText3, styles.commonStyle]}>Momo❣</Text>
    </View>
  )
};


const styles = StyleSheet.create({
    parentView: {
        marginTop: 100,
        marginHorizontal: 10,
        borderWidth : 3,
        borderColor : "#101820FF"
    },
    childText: {
        backgroundColor : "#97BC62FF",
        borderColor : "#2C5F2D",
        color : "#2C5F2D",
        marginTop: 30,
    },
    childText2:{
        backgroundColor : "#D4B996FF",
        borderColor : "#A07855FF",
        color : "#A07855FF",
    },
    childText3 :{
        backgroundColor : "#9CC3D5FF",
        borderColor : "#0063B2FF",
        color : "#0063B2FF",
    },
    commonStyle : {
        fontSize: 20,
        paddVertical :30,
        textAlign: "center",
        borderWidth: 5,
        marginBottom : 30,
        marginHorizontal : 50,
    }
})

export default AddMultipleStyle