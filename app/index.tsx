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
import EditStatusScreen from "./navigation/EditStatusScreen";
import EditProfileScreen from "./navigation/EditProfileScreen";
import { Entypo } from "@expo/vector-icons";
import StaredMessageScreen from "./navigation/StaredMessageScreen";
import AccountScreen from "./navigation/AccountScreen";
import DataScreen from "./navigation/DataScreen";
import NotificationScreen from "./navigation/NotificationScreen";
import ChatSettingScreen from "./navigation/ChatSettingScreen";
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
      <Stack.Screen
        name="EditStatus"
        component={EditStatusScreen}
        options={{
          headerShown: false,
          presentation: "modal",
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          presentation: "modal",
          animation: "fade_from_bottom",
          header: (props) => (
            <Header
              backgroundColor="#f6f6f6"
              leftComponent={
                <Pressable
                  hitSlop={20}
                  className=" flex-row items-center"
                  onPress={() => props.navigation.goBack()}
                >
                  <Entypo name="chevron-small-left" size={24} color="blue" />
                  <Text className="text-primary line-clamp-1">Settings</Text>
                </Pressable>
              }
              centerComponent={{
                text: "Edit Profile",
                className: "text-lg font-bold",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="StaredMessage"
        component={StaredMessageScreen}
        options={{
          presentation: "modal",
          animation: "fade_from_bottom",
          header: (props) => (
            <Header
              backgroundColor="#f6f6f6"
              leftComponent={
                <Pressable
                  hitSlop={20}
                  className=" flex-row items-center"
                  onPress={() => props.navigation.goBack()}
                >
                  <Entypo name="chevron-small-left" size={24} color="blue" />
                  <Text className="text-primary line-clamp-1">Settings</Text>
                </Pressable>
              }
              centerComponent={{
                text: "Stared Message",
                className: "text-lg font-bold",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          presentation: "modal",
          animation: "fade_from_bottom",
          header: (props) => (
            <Header
              backgroundColor="#f6f6f6"
              leftComponent={
                <Pressable
                  hitSlop={20}
                  className=" flex-row items-center"
                  onPress={() => props.navigation.goBack()}
                >
                  <Entypo name="chevron-small-left" size={24} color="blue" />
                  <Text className="text-primary line-clamp-1">Settings</Text>
                </Pressable>
              }
              centerComponent={{
                text: "Account",
                className: "text-lg font-bold",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ChatSettings"
        component={ChatSettingScreen}
        options={{
          presentation: "modal",
          animation: "fade_from_bottom",
          header: (props) => (
            <Header
              backgroundColor="#f6f6f6"
              leftComponent={
                <Pressable
                  hitSlop={20}
                  className=" flex-row items-center"
                  onPress={() => props.navigation.goBack()}
                >
                  <Entypo name="chevron-small-left" size={24} color="blue" />
                  <Text className="text-primary line-clamp-1">Settings</Text>
                </Pressable>
              }
              centerComponent={{
                text: "Chats",
                className: "text-lg font-bold",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          presentation: "modal",
          animation: "fade_from_bottom",
          header: (props) => (
            <Header
              backgroundColor="#f6f6f6"
              leftComponent={
                <Pressable
                  hitSlop={20}
                  className=" flex-row items-center"
                  onPress={() => props.navigation.goBack()}
                >
                  <Entypo name="chevron-small-left" size={24} color="blue" />
                  <Text className="text-primary line-clamp-1">Settings</Text>
                </Pressable>
              }
              centerComponent={{
                text: "Notifications",
                className: "text-lg font-bold",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="DataStorage"
        component={DataScreen}
        options={{
          presentation: "modal",
          animation: "fade_from_bottom",
          header: (props) => (
            <Header
              backgroundColor="#f6f6f6"
              leftComponent={
                <Pressable
                  hitSlop={20}
                  className=" flex-row items-center"
                  onPress={() => props.navigation.goBack()}
                >
                  <Entypo name="chevron-small-left" size={24} color="blue" />
                  <Text className="text-primary line-clamp-1">Settings</Text>
                </Pressable>
              }
              centerComponent={{
                text: "Data and Storage Usage",
                className: "text-lg font-bold",
              }}
            />
          ),
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
      <Tab.Screen
        name="Calls"
        component={CallsScreen}
        options={{ headerShown: false }}
      />
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
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          header: (props) => (
            <Header
              backgroundColor="#f6f6f6"
              centerComponent={
                <Text className="text-lg font-bold">Settings</Text>
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
