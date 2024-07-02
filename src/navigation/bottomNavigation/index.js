import AnDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";
import Home from "../../pages/Home";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  const [tabBackground, setTabBackground] = useState("red");
  const [textColor, setTextColor] = useState("black");
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="black"
        inactiveColor="#386c80"
    
        barStyle={{
          backgroundColor: tabBackground,
        }}>
        <Tab.Screen
          name="Feed"
          
          component={Home}
          listeners={{
            tabPress() {
              setTabBackground("#dfbce3");
            },
          }}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <AnDesign name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Home}
          listeners={{
            tabPress() {
              setTabBackground("pink");
            },
          }}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                onPre
                name="bell"
                color={color}
                size={26}
              />
              
            ),
          }}
        />
        
        <Tab.Screen
          name="Profile"
          component={Home}
          listeners={{
            tabPress() {
              setTabBackground("#a695fc");
            },
          }}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
          
        />
         <Tab.Screen
          name="Map"
          component={Home}
          listeners={{
            tabPress() {
              setTabBackground("#e37177");
            },
          }}
          options={{
            tabBarLabel: "google-maps",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="google-maps" color={color} size={26} />
            ),
          }}
          
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;