import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { colors } from './scr/theme/color';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Text from './scr/component/text/text';
import Home from './scr/screens/home';

import Details from './scr/screens/details';

// creating stack
const Stack = createNativeStackNavigator();



// main app funtion 
export default function App() {

  // setting custom font using expo font (see documentation of expo font)
  const [loaded] = useFonts({
    'AntonioMedium': require('./assets/fonts/Antonio-Medium.ttf'),
    'SpartanBold': require('./assets/fonts/Spartan-Bold.ttf'),
    'SpartanRegular': require('./assets/fonts/Spartan-Regular.ttf')
  })
  if (!loaded) {
    return <Text>font is loading...</Text>;
  }
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black
  },
});
