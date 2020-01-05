import React from 'react'
import { View, StyleSheet, FlatList, Text } from "react-native"
import { Post } from "./Post"
// import { Text } from 'react-native-paper'

export const PostList = ({data=[], onOpen}) => {

    if (!data.length) {
        return <View style={style.wrapper}>
            <Text style={style.noItem}>Постов пока нет</Text>
        </View>
    }

    return (
        <View style={style.wraper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                // onOpen={openPostHandler}
                renderItem={({ item }) => {
                    return <Post post={item} onOpen={onOpen} />;
                }}
            />
        </View>
    );
} 

const style = StyleSheet.create({
    wraper: {
        padding: 10
    },
    noItem: {
        textAlign: "center",
        marginVertical: 10,
        fontSize: 18
    }
})

