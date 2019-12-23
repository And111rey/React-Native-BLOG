import { createAppContainer, ThemeColors } from "react-navigation"
// createAppContainer --->>> позволяет создать контейнер для все приложения 
import React from "react"
import { createStackNavigator } from "react-navigation-stack"
//  для размищение в себе скринов, 

import { createBottomTabNavigator } from "react-navigation-tabs"
import { Ionicons } from "@expo/vector-icons"
import { MainScreen } from "../screens/MainScreen"
import { PostScreen } from "../screens/PostScreen"
import { THEME } from "../theme"
import {BookedScreen} from "../screens/BookedScreen" 


const PostNavigator = createStackNavigator({
    Main:  MainScreen,                // (будет отрисовыватся первым) один из способов вариации регистрации скринов
    Post: {                           // один из способов вариации регистрации скринов 
        screen: PostScreen            //
    }
},
    {
        initialRouteName: "Main", // второй параметр "createStackNavigator" указывает // .... какой экран по умолчанию загрузится первым
        defaultNavigationOptions: {     //  опции для все зарегистрированых скринов
            headerStyle: {
                backgroundColor: THEME.MAIN_COLOR
            },
            headerTintColor: "#fff"
        }
    }
)                               
// наполняем "createStackNavigator" всеми скринами, присваиваем переменную,
// и помещаем это все в "createAppContainer" чтоб пользоватся этим по всему приложению

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post: {
        screen: PostScreen
    }
},
{
    // initialRouteName: "Booked", // второй параметр "createStackNavigator" указывает // .... какой экран по умолчанию загрузится первым
    defaultNavigationOptions: {     //  опции для все зарегистрированых скринов
        headerStyle: {
            backgroundColor: THEME.MAIN_COLOR
        },
        headerTintColor: "#fff"
    }
}
)

const BottomNavigator = createBottomTabNavigator({
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarIcon: <Ionicons name="ios-albums" size={25} />
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarIcon: < Ionicons name="ios-star" size={25} />
        }
    }
})

export const AppNavigator = createAppContainer( BottomNavigator) // закиваем переменную со всеми Скринами
                                                        // далие в эту переменную обвлрачиваем все приложение

