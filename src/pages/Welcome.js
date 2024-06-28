import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/customButton";
import Loader from "../components/Loader";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome.jpg");

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading === true ? (
        <ImageBackground
          imageStyle={{ opacity: 0.9 }}
          source={WelcomeImage}
          style={[containerStyle.container, { width: "100", hieght: "100"}]}>
          
          <Text
          
            style={{
              fontSize: 40,
              textAlign:"center",
              fontWeight: "bold",
              color: "black",
              fontFamily: "Inter-Black",
              backgroundColor: "#78f4ff",
              borderRadius: 10,
              borderWidth:2,
              paddingHorizontal:50,
              margin:5,
            }}>
            FLIGHT
          </Text>
          <View style = {{borderwidth:5, bordercolor:"grey",width:200,display:"flex",justifyContent:"center",alignItems:"center", borderRadius:12 }}>
          <Text
            style={{
              fontSize: 35,
              textAlign:"center",
              
              fontWeight: "bold",
              color: "5cfa71",
              fontFamily: "Inter-Black",
              backgroundColor: "#facda0",
              borderRadius: 10,
              borderWidth: 2,
margin:4,
width:180,
            padding:4,
            }}>
            TRACKER
          </Text>

          </View>
          <View style={{ marginTop:450 }}>
            <CustomButton title={"START TRAVEL"}></CustomButton>
          </View>
        </ImageBackground>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
