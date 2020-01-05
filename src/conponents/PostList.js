import React from 'react'
import { View, StyleSheet, FlatList } from "react-native"
import { Post } from "./Post"

export const PostList = ({data, onOpen}) => {
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
})

