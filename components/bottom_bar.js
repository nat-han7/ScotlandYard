import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from './styling';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomBar({ navigation }) {
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: styles.navBar,
                tabBarLabelStyle: styles.navBarItem,
            }}>
                {navigation.map((item) => (
                    <Tab.Screen key={item.name} name={item.name} component={item.component} />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    );
}