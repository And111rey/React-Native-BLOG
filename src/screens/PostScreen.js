import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"


export const PostScreen = ({navigation}) => {
    
    const { goBack } = navigation; // импортируем метод goBack
    // onPress={()=>{goBack()}} реализируем метод "goBack()"
    return (
        <View style={styles.center} >
            <Text>PostScreen</Text>
            <Button title="Go back" onPress={()=>{goBack()}} /> 
        </View>
    )
}

PostScreen.navigationOptions = {
    headerTitle: "Пост № 49"
}

const styles  = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})