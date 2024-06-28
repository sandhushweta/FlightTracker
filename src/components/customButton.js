import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const CustomButton = ({ title }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 190,
          height: 50,
          backgroundColor: "#3ae5e8",
          justifyContent: "center",
          borderRadius: 20,
        }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
