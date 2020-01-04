import React, {useEffect, useCallback} from 'react' 
import { View, Text, StyleSheet, Button, Image, ScrollView, Alert } from 'react-native'
import { THEM } from '../thems'
// import { DATA } from "../data"
import {Item, HeaderButtons} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from "../conponents/AppHeaderIcon"
import { useDispatch, useSelector } from "react-redux"
import { toogleBooked, removePost } from '../store/actions/post'


export const PostScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const postId = navigation.getParam("postId")

    const post = useSelector(state =>
        state.post.allPosts.find(p => p.id === postId)
    );

    const booked = useSelector(state =>
        state.post.bookedPosts.some(post => post.id === postId)
    );

    useEffect(() => {
        navigation.setParams({ booked })
    },[booked])



    const toggleHendler = useCallback(() => {
        dispatch(toogleBooked(postId))
    }, [dispatch, postId])
    
    useEffect(() => {
        navigation.setParams({ toggleHendler })
    }, [toggleHendler])

    const removeHandler = () => {
        Alert.alert(
            "Удаление ПОСТA",
            "Вы точно хотите удалить пост ?",

            [
                {
                    text: "Отменить",
                    style: "cancel"
                },
                { text: "УДАЛИТЬ", style: "destructive", onPress: () => {
                    navigation.navigate("Main")
                    dispatch(removePost(postId))
                } }
            ],
            { cancelable: false }
        );
    };


    if(!post) {
        return null
    }

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button
                title="Удалить"
                color={THEM.DANGER_COLOR}
                onPress={removeHandler}
            />
        </ScrollView>
    );
}

PostScreen.navigationOptions = ({navigation}) => {
    const date = navigation.getParam("date")
    const booked = navigation.getParam('booked')
    const toggleHendler = navigation.getParam('toggleHendler')
    const iconName = booked? "ios-star": 'ios-star-outline'
    return {
        // headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`
        headerTitle: "Мой НОМЕР " + new Date(date).toLocaleDateString(),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title="Take Foto"
                    iconName={iconName}
                    onPress={toggleHendler}
                />
            </HeaderButtons>
        )
    }; 
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