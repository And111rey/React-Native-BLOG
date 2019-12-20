

import React from "react"
import { HeaderButton } from "react-navigation-header-buttons" // импортируем библиотеку для работи в кнопками в хедере
// { HeaderButton } ---->>>> импортируем одну кнопку из бибдтотеки .....
import { Platform } from "react-native" // "Platform" --->>> для опридиления и работы с платформами устроиства
import { THEME } from "../theme"
import { Ionicons } from '@expo/vector-icons'; // импортируем  для работы с иконками



export const AppHeaderIcon = (props) => {
    return(
        < HeaderButton      //  импортирований шаблонный комбонетн кнопки
            {...props}      //  все что мы передадим в данный пропс будет переданов компонент 
            iconSize={24}   // размен 
            IconComponent={Ionicons} // размищаем для контента импортированою библиотеку
            color={Platform.OS === "android" ? "#fff": THEME.MAIN_COLOR}/>
            // если опер.Система "android" то  цвет = "#fff"
            

    )
}