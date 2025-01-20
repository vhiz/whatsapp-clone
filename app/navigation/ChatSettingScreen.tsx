import { View, Text, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

export default function ChatSettingScreen() {
  const [checked, setChecked] = useState(false);

const toggleSwitch = () => {
  setChecked(!checked);
};
  return (
    <View className="flex-1">
      <View className="w-full mt-4 bg-white">
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Change WallPaper</Text>
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
              <Text className="font-semibold">Save to Camera Roll</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <Switch
            value={checked}
            onValueChange={(value) => setChecked(value)}
          />
        </ListItem>
      </View>
      <Text className="p-3 opacity-40">
        {" "}
        Automatically save photos and videos you receive to your phone's camera
        roll.
      </Text>
      <View className="w-full mt-4 bg-white">
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Chat Backup</Text>
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
              <Text className="font-semibold text-primary">Archive All Chats</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold text-red-500">Clear Chats</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold text-red-500">Delete All Chats</Text>
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
