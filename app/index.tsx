import RegisterScreen from "./navigation/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import StatusScreen from "./navigation/StatusScreen";
import "../global.css";
import SettingScreen from "./navigation/SettingScreen";
import CameraScreen from "./navigation/CameraScreen";
import CallsScreen from "./navigation/CallsScreen";
import { Platform } from "react-native";
import MyTabBar from "@/components/MyTabBar";
import ChatsScreen from "./navigation/ChatsScreen";
import ChatScreen from "./navigation/ChatScreen";
import ContactInfoScreen from "./navigation/ContactInfoScreen";
import EditScreen from "./navigation/EditScreen";
export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: Platform.OS === "ios" ? "simple_push" : "ios_from_right",
      }}
    >
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        getId={({ params }) => params?.chatId}
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contact"
        getId={({ params }) => params?.contactId}
        component={ContactInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditContact"
        component={EditScreen}
        options={{ headerShown: false, presentation: "modal",animation:'fade_from_bottom' }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{ headerShown: false, animation: "shift" }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
