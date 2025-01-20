import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function StatusScreen({ navigation }: { navigation: any }) {
  return (
    <View className="flex-1">
      <View className="p-3 flex-row items-center justify-between bg-white mt-5">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("Camera")}
            className="relative"
          >
            <Avatar
              rounded
              source={{
                uri: "https://randomuser.me/api/portraits/women/5.jpg",
              }}
              size={60}
            />
            <View className="absolute bottom-0 right-0">
              <AntDesign name="pluscircle" size={20} color="blue" />
            </View>
          </TouchableOpacity>
          <View>
            <Text className="text-lg font-bold">My Status</Text>
            <Text className="opacity-40">Add to my status</Text>
          </View>
        </View>
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("Camera")}
            className="rounded-full items-center p-2 justify-center w-14 h-14 bg-gray-300"
          >
            <FontAwesome5 name="camera" size={18} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push("EditStatus")}
            className="rounded-full items-center p-2 justify-center w-14 h-14 bg-gray-300"
          >
            <FontAwesome name="pencil" size={18} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
      <Text className="mt-4 bg-white p-2 text-center opacity-60">
        No recent updates to show right now
      </Text>
    </View>
  );
}
