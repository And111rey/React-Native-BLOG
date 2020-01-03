import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { AppHeaderIcon } from "../conponents/AppHeaderIcon"

export const AboutScreen = ({}) => {
    return (
        <View style={style.center} >
            <Text>AboutScreen</Text>
        </View>
    )
}

AboutScreen.navigationOptions = ({navigation}) => ({
    headerTitle: "О приложении",
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Rover" iconName="ios-menu" onPress={()=> navigation.toggleDrawer()}/>
        </HeaderButtons>
        )
})


const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})