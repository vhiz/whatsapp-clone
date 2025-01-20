import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

export default function AccountScreen() {
  return (
    <View className="flex-1">
      <View className="w-full mt-4 bg-white">
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Privacy</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Security</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Two-Step Verification</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Change Number</Text>
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
              <Text className="font-semibold">Request Account Info</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Delete My Account</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
      </View>
    </View>
  );
}
