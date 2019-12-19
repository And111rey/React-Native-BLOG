import React from "react"
import { View, Text, StyleSheet, Button, Image, ScrollView, Alert } from "react-native"
import {DATA} from "../data"
import { THEME } from "../theme"


export const PostScreen = ({navigation}) => {

    const postId = navigation.getParam("postId") // "getParam" -->> взять параметр 
    
    const post =DATA.find( p => p.id  === postId)
    
    // const { goBack } = navigation; // импортируем метод goBack
    // onPress={()=>{goBack()}} реализируем метод "goBack()"

    const removeHandler =() => {
        Alert.alert( 
        'УДАЛЕНИЕ',
        'Вы точно хотыте удалить пост?',
        [
          {
            text: 'Отмена',
            // onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'УДАЛИТЬ', onPress: () => {}},
        ],
        {cancelable: false},)
    }


    return (
        <ScrollView>
        <View style={styles.center} >
            <Image source={{uri: post.img}} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title} >{post.text}</Text>
            </View>
            <Button  onPress={removeHandler} title="Delete" color={THEME.DANGER_COLOR}/>
        </View>
        </ScrollView>
    )
}

// для работы со скринами 
PostScreen.navigationOptions = ({navigation}) => {
    const date = navigation.getParam("date") // "getParam" -->> взять параметр 

    return {headerTitle: "Пост от " + new Date(date).toLocaleDateString()}        // данныйметод отвечает за  "title" скрина 
}

const styles  = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    textWrap: {
       padding: 10 
    },
    title: {
        fontFamily: "open-regular"
    }
})