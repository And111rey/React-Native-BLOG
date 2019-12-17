import { createAppContainer } from "react-navigation"
// createAppContainer --->>> позволяет создать контейнер для все приложения 

import { createStackNavigator } from "react-navigation-stack"
//  для размищение в себе скринов, 

import { MainScreen } from "../screens/MainScreen"
import { PostScreen } from "../screens/PostScreen"
import { THEME } from "../theme"


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


export const AppNavigator = createAppContainer(PostNavigator) // закиваем переменную со всеми Скринами
                                                        // далие в эту переменную обвлрачиваем все приложение

