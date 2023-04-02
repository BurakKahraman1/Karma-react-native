import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { GlobalStyles } from "./constants/style";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const HomeBottomNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary1 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary1 },
        tabBarActiveTintColor: GlobalStyles.colors.primary3,
      })}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register",
          tabBarLabel: "Register",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {

  return (
    <>
      <StatusBar style="auto" /> 
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={{
              headerTintColor: "black",
              
            }}
          >
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              
              options={{title:'Register', headerTitleAlign:'center'}}
            />
              <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{title:'Login', headerTitleAlign:'center'}}
            />
            <Stack.Screen
              name="HomeBottomNavigation"
              component={HomeBottomNavigation}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
