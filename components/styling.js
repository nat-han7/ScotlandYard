import { StyleSheet, Dimensions } from "react-native";
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    app: {
        fontFamily: 'PressStart2P_400Regular',
    },
    navBar: {
        height: height * 0.1,
        width: width,
        backgroundColor: '#313131',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 0.1 * height,
    },
    navBarItem: {
        fontSize: 0.03 * height,
    },
    homeScreen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#636363',
    }
})

export default function loadStyles() {
    let [fontsLoaded] = useFonts({
        PressStart2P_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return null;
}