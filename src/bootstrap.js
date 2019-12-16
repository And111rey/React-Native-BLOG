import * as Font from "expo-font"
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType"


export async function bootstrap () {
    await Font.loadAsync({
        "open-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
        "open-regular": require("../assets/fonts/OpenSans-Regular.ttf")
    })
}