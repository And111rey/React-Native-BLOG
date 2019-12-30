import React from "react"
import { HeaderButton } from "react-navigation-header-buttons"
import { Platform } from 'react-native'
import { THEM } from '../thems'
import { Ionicons } from '@expo/vector-icons'

export const AppHeaderIcon = (props) => {
    return(
        <HeaderButton
            {...props}
            iconSize={24}
            color={Platform.OS === 'android'? '#fff': THEM.MAIN_COLOR}
            IconComponent={Ionicons}
        />
    )
}