import React from 'react' 
import { View, Text, StyleSheet, Button } from 'react-native'

export const PostScreen = ({}) => {

    const goToPost = () => {
        
    }
    return (
        <View style={style.center} >
            <Text>PostScreen</Text>
            <Button title="Go To Post" onPress={goToPost}  />
        </View>
    )
}

PostScreen.navigationOptuins = {
    header: "Мой НОМЕР 49"
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})