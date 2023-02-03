import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import {store } from "./store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
           options={{ presentation: "fullScreenModal" , headerShown: false}}
          />
          <Stack.Screen name="Basket" component={BasketScreen} 
          options={{ presentation: "modal" , headerShown: false}}
          />
          <Stack.Screen name="Delivery" component={DeliveryScreen} 
          options={{ presentation: "modal" , headerShown: false}}
          />
        </Stack.Navigator>
      </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
