import React, {useEffect} from 'react' 
import { View, Text, StyleSheet, Button, Image, ScrollView, Alert } from 'react-native'
import { THEM } from '../thems'
import { DATA } from "../data"
import {Item, HeaderButtons} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from "../conponents/AppHeaderIcon"

export const PostScreen = ({ navigation }) => {

    const postId = navigation.getParam("postId")

    const post = DATA.find(p=>p.id === postId)

    // useEffect(() => {
    //     navigation.setParams({ booked: post.booked })
    // },[])

    const removeHandler = () => {
        Alert.alert(
            'Удаление ПОСТA',
            'Вы точно хотите удалить пост ?',
            
            [
              {
                text: 'Отменить',
                style: 'cancel',
              },
              {text: 'УДАЛИТЬ',  onPress: () => {},style:"destructive"},
            ],
            {cancelable: false},
          );
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image} />
            <View  style={styles.textWrap}>
                <Text style={styles.title} >
                    {post.text}
                </Text>
            </View>
            <Button title="Удалить" color={THEM.DANGER_COLOR} onPress={removeHandler}/>
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({navigation}) => {
    const date = navigation.getParam("date")
    const booked = navigation.getParam('booked')
    const iconName = booked? "ios-star": 'ios-star-outline'
    console.log("dddd ", date)
    return {
        // headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`
        headerTitle: "Мой НОМЕР " + new Date(date).toLocaleDateString(),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take Foto" iconName={iconName} onPress={()=>{console.log("PRESS PHOTO")}}/>
            </HeaderButtons>
            ),

    } 
}

const styles = StyleSheet.create({
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