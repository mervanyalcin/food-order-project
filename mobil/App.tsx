import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Pages
import HomeScreen from './screens/HomeScreen';
import DetailCategory from './screens/DetailCategory';
import DetailProduct from './screens/DetailProduct';

interface Item {
  key: string;
}

export type RootParamList = {
  Home: undefined;
  DetailScreen: {category: string} | undefined;
  DetailProduct: {product: string} | undefined;
};

const Stack = createStackNavigator<RootParamList>();
function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="DetailScreen"
          component={DetailCategory}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="DetailProduct"
          component={DetailProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
