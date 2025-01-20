import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Avatar, ListItem } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function SettingScreen({ navigation }: { navigation: any }) {
  return (
    <View className="flex-1">
      <ScrollView>
        <ListItem
          onPress={() => navigation.push("EditProfile")}
          bottomDivider
          containerStyle={{ padding: 10 }}
        >
          <Avatar
            rounded
            size={50}
            source={{
              uri: "https://randomuser.me/api/portraits/women/20.jpg",
            }}
          />
          <ListItem.Content style={{ padding: 0 }}>
            <View className="flex-row items-center w-full justify-between">
              <View>
                <Text className="font-semibold text-lg">Roxie Schmidt</Text>
                <View className="flex-row items-center gap-1 opacity-40">
                  <Text className="line-clamp-1">
                    food rabbit think bridge conversation cattle melted might
                    bound treated location wife series win noun where material
                    share port slept below powder declared managedoutgoing
                  </Text>
                </View>
              </View>
            </View>
          </ListItem.Content>
          <View className="flex-row items-center gap-1 opacity-40">
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
        </ListItem>

        <View className="w-full mt-4 bg-white">
          <ListItem
            onPress={() => navigation.push("StaredMessage")}
            bottomDivider
          >
            <ListItem.Content>
              <TouchableOpacity
                onPress={() => navigation.push("StaredMessage")}
                className="w-full"
              >
                <Text className="font-semibold">Stared messages</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">WhatsApp Web/Desktop</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
        </View>
        <View className="w-full mt-4 bg-white">
          <ListItem onPress={() => navigation.push("Account")} bottomDivider>
            <ListItem.Content>
              <TouchableOpacity
                onPress={() => navigation.push("Account")}
                className="w-full"
              >
                <Text className="font-semibold">Account</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
          <ListItem
            onPress={() => navigation.push("ChatSettings")}
            bottomDivider
          >
            <ListItem.Content>
              <TouchableOpacity
                onPress={() => navigation.push("ChatSettings")}
                className="w-full"
              >
                <Text className="font-semibold">Chats</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
          <ListItem
            onPress={() => navigation.push("Notifications")}
            bottomDivider
          >
            <ListItem.Content>
              <TouchableOpacity
                onPress={() => navigation.push("Notifications")}
                className="w-full"
              >
                <Text className="font-semibold">Notifications</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
          <ListItem
            onPress={() => navigation.push("DataStorage")}
            bottomDivider
          >
            <ListItem.Content>
              <TouchableOpacity
                onPress={() => navigation.push("DataStorage")}
                className="w-full"
              >
                <Text className="font-semibold">Data and Storage Usage</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
        </View>
        <View className="w-full mt-4 bg-white">
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Help</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Tell a Friend</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
        </View>
        <View className="opacity-40 my-5">
          <Text className="text-center">Whatsapp from facebook</Text>
        </View>
      </ScrollView>
    </View>
  );
}
