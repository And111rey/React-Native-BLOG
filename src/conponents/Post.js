import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'

export const Post = ({post}) => {
    console.log("1111", post.img)
    return (
        <View style={styles.post}>
            <ImageBackground style={styles.imgage} source ={{ uri: post.img }}>
                <View style={styles.textWrap} >
                    <Text style={styles.title} >
                        {new Date(post.date).toLocaleDateString()}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: "hidden"
    },
    imgage: {
        width: "100%",
        height: 200
    },
    textWrap: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        alignItems: "center",
        width: "100%"
    },
    title: {
        color: "#fff",
        fontFamily: "open-regular"
    }
})