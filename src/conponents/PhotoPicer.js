import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions"; //для разришения доступа к работе с файлами телефона
import { View, StyleSheet, Image, Button, Alert } from "react-native";

async function askForPirmissions() {
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    );
    if (status !== "granted") {
        Alert.alert("Ошибка ", "вы не предоставили права на созданиефото ");
        return false;
    }
    return true;
}

export const PhotoPicker = ({onPick}) => {
    const [image, setImage] = useState(null);

    const takePhoto = async () => {
        const hasPermissions = await askForPirmissions();

        if (!hasPermissions) {
            return;
        }

        const img = await ImagePicker.launchCameraAsync({
            // асинхронный запуск камеры
            quality: 0.7, // качество снимка
            allowsEditing: false, // если "false" --- нет возможности редакторовать камеру
            aspect: [16, 9] // соотношение фотографии которую мы сделали
        });

        console.log("это то что надо ",img.uri);
        setImage(img.uri)
        onPick(img.uri)
    };

    return (
        <View style={styles.wrapper}>
            <Button title="Сделать ФОТО" onPress={takePhoto} />
            {image && <Image style={styles.image} source={{ uri: image }} />}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: "100%",
        height: 200,
        marginTop: 10
    }
});
