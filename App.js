import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { GlobalStyles } from "./constants/style";
import HomeScreen from "./screens/HomeScreen";
import CustomButton from "./components/UI/Button";
import { View } from "react-native";
import LikeScreen from "./screens/LikesScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const HomeBottomNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: 'white' },
        tabBarActiveTintColor: GlobalStyles.colors.primary1,
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle:{height:70, justifyContent:'center', alignItems:'center'},
      })}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => (
            <View style={{justifyContent:'center', marginHorizontal:12}}>
            <CustomButton {...props} style={{width:160}} color='primary1'> Users </CustomButton>
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="LikeScreen"
        component={LikeScreen}
        options={{
          title:'YOUR LIKES',
          headerShown:true,
          headerStyle:{backgroundColor:'#6f34ee'},
          headerTitleAlign:'center',
          tabBarButton: (props) => (
            <View style={{justifyContent:'center', marginHorizontal:12}}>
            <CustomButton {...props} style={{width:160}} color='primary4'> Likes </CustomButton>
            </View>
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
