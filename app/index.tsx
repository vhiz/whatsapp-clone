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
import { Platform, Pressable, Text } from "react-native";
import MyTabBar from "@/components/MyTabBar";
import ChatsScreen from "./navigation/ChatsScreen";
import ChatScreen from "./navigation/ChatScreen";
import ContactInfoScreen from "./navigation/ContactInfoScreen";
import EditScreen from "./navigation/EditScreen";
import { Header } from "@rneui/themed";
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
        options={{
          headerShown: false,
          presentation: "modal",
          animation: "fade_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={({ route }) => ({
        animation: "shift",
      })}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          header: (prop) => (
            <Header
              backgroundColor="#f6f6f6"
              leftComponent={
                <Pressable className="text-primary font-semibold">
                  <Text>Privacy</Text>
                </Pressable>
              }
              centerComponent={
                <Text className="text-lg font-bold">Status</Text>
              }
            />
          ),
        }}
      />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false, animation: "fade" }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
