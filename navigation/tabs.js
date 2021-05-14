import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, Platform } from 'react-native'
import { COLORS , icons} from '../constants'
import {  Home, Notification } from '../screens'
const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: true,
    activeTintColor: '#000',
    style: {
        height: Platform.OS === 'ios' ? "10%" : "9%",
        backgroundColor: COLORS.white,
        borderColor : 'none',
        borderTopWidth: 10,
        borderTopColor: COLORS.white,
        borderBottomWidth: 0
    },
    labelStyle: {
        height : Platform.OS === "ios" ? 15 : 32,
        fontSize : 10,
        lineHeight: 15,
        fontFamily: "Poppins-Medium"
      },
}

const size = 22;
const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon : ({focused}) =>{
                    const tintColor = focused ?  COLORS.black : '#C0C0C0'
                    switch (route.name) {
                        // Add icons of Tab navigation here 
                        case "Home":
                            return(
                                <Image
                                source={icons.home_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor : tintColor,
                                    width :size,
                                    height: size
                                }}
                            />
                            )
                        case "Collection":
                            return(
                                <Image
                                source={icons.collection_icon}
                                resizeMode="contain"
                                style={{
                                    tintColor : tintColor,
                                    width :size - 1,
                                    height: size - 1
                                }}
                            />
                            )
                            case "Notification":
                                return(
                                    <Image
                                    source={icons.notification_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor : tintColor,
                                        width :size,
                                        height: size
                                    }}
                                />
                                )
                    }
                }
            })}
        >
        {/* Add Tab screen here which you specifically want to show on click of Tab */}
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Collection"
                component={Home}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
            />
        </Tab.Navigator>
    )
}

export default Tabs

