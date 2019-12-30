import React from 'react' 
import { View, Text, StyleSheet, Button } from 'react-native'

export const PostScreen = ({ navigation }) => {

    const postId = navigation.getParam("postId")
    console.log("first**** ",postId)
    return (
        <View style={style.center} >
            <Text>{postId}</Text>
            {/* <Button title="Go To Post" onPress={goBack}  /> */}
        </View>
    )
}

PostScreen.navigationOptions = ({navigation}) => {
    const date = navigation.getParam("date")
    console.log("dddd ", date)
    return {
        headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`
        // headerTitle: "Мой НОМЕР " + {date}

    } 
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})