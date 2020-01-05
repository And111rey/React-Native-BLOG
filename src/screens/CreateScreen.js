import React, {useState} from 'react' 
import { View, Text, StyleSheet, TextInput, Image, Button, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { AppHeaderIcon } from "../conponents/AppHeaderIcon"
import { THEM } from '../thems'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/post'
import { PhotoPicker } from '../conponents/PhotoPicer'

export const CreateScreen = ({navigation}) => {
    const [text, setText] = useState('') 
    const dispatch = useDispatch()

    const img = "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg"

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: img,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    const photoPickHendler = uri => {
        
    }

    return (
        <ScrollView style={styles.scroll}>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >
            <View style={styles.wraper}>
                <Text style={styles.title}>Создай новый пост</Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="Введите текст заметки"
                    value={text}
                    onChangeText={setText}
                    multiline
                />
               <PhotoPicker onPick={photoPickHendler} />
                <Button
                    title="Создать пост"
                    color={THEM.MAIN_COLOR}
                    onPress={saveHandler}
                />
            </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wraper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "open-regular",
        marginVertical: 10
    },
    textArea: {
        padding: 10,
        marginBottom: 10
    },
    scroll: {
        flex: 1
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
