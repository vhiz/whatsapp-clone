import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Avatar, Divider } from "@rneui/base";

export default function EditProfileScreen() {
  return (
    <View className="flex-1">
      <ScrollView>
        <View
          className="bg-white p-3"
          style={{ padding: 20, paddingVertical: 50 }}
        >
          <View className="flex-row items-center gap-4">
            <View className="items-center gap-2">
              <Avatar
                rounded
                size={50}
                source={{
                  uri: "https://randomuser.me/api/portraits/women/20.jpg",
                }}
              />
              <Text className="text-primary">Edit </Text>
            </View>
            <Text className="opacity-50">
              Enter your name and add an optional profile picture{" "}
            </Text>
          </View>
          <Divider className="my-3" />
          <Text>Shane</Text>
          <Divider className="my-3" />
        </View>

        <Text className="mt-4 opacity-40 text-lg p-2">Phone Number</Text>
        <View className="bg-white p-3">
          <Text>+344 445 123 112</Text>
        </View>
        <Text className="mt-4 opacity-40 text-lg p-2">About</Text>
        <View className="bg-white p-3">
          <Text>
            everyone near aware bean managed could living straight truth maybe
            rough mean support balloon talk slave opinion yesterday single loss
            nearly ring beyond elephant
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
