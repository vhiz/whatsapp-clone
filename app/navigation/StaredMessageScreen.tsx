import { View, Text } from "react-native";
import React from "react";

export default function StaredMessageScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="opacity-40 font-semibold">No Stared Messages</Text>
      <Text className="opacity-40 ">Tap And hold any message to star it</Text>
    </View>
  );
}
