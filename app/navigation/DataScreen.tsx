import { View, Text, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

export default function DataScreen() {
    const [checked1, setChecked1] = useState(false);
  
  return (
    <View className="flex-1">
      <Text className="uppercase p-2 mt-4">Media Auto-Download</Text>
      <View className="w-full  bg-white">
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Photos</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Text>Wi-Fi and Cellular</Text>
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Audio</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Text>Wi-Fi</Text>
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Videos</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Text>Wi-Fi </Text>
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Documents</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Text>Wi-Fi </Text>
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full opacity-50">
              <Text className="">Reset Auto-Download Settings</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      </View>
      <View className="w-full mt-4 bg-white">
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Low Data Usage</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <Switch
            value={checked1}
            onValueChange={(value) => setChecked1(value)}
          />
        </ListItem>
      </View>
      <View className="w-full mt-4 bg-white">
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Network Usage</Text>
            </TouchableOpacity>
          </ListItem.Content>
          <View className="flex-row opacity-40">
            <Entypo name="chevron-small-right" size={24} color="blue" />
          </View>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <TouchableOpacity className="w-full">
              <Text className="font-semibold">Storage Usage</Text>
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
