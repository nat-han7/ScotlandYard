import { StatusBar } from 'expo-status-bar';
import BottomBar from './components/bottom_bar';
import HomeScreen from './pages/HomeScreen';
import { styles } from './components/styling';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.app}>
      <BottomBar navigation={[
        { name: 'Home', component: HomeScreen },
      ]}/>
      <StatusBar style="auto" />
    </View>
  );
}
