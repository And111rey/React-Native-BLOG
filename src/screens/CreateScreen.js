import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { AppHeaderIcon } from "../conponents/AppHeaderIcon"

export const CreateScreen = ({}) => {
    return (
        <View style={style.center} >
            <Text>CreateScreen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: "Создать пост",
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Rover" iconName="ios-menu" onPress={()=> navigation.toggleDrawer()}/>
        </HeaderButtons>
        )
})
