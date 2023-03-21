import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailCategory from './screens/CategoryDetailScreen';
import HomeScreen from './screens/HomeScreen';
import DetailProduct from './screens/FoodDetailScreen';
import { Provider } from 'react-redux';
import { mystore } from './store';
import { useDispatch } from 'react-redux/es/exports';


export type RootParamList = {
  Home: undefined;
  DetailScreen: { screen: string } | undefined;
  DetailProduct: { product: string } | undefined;
};

const Stack = createStackNavigator<RootParamList>();

type Props = {}
const App: React.FC<Props> = () => {
  const disp = useDispatch()
  return (
    <>
      <Provider store={mystore}>
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
                headerShown: true,
              }}
              name="DetailProduct"
              component={DetailProduct}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App