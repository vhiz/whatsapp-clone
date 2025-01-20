import { View, Text, TouchableOpacity, Switch, ScrollView } from "react-native";
import React, { useState } from "react";
import { Divider, ListItem } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

export default function NotificationScreen() {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <View className="flex-1">
      <ScrollView>
        <Text className="text-center p-2">
          WARNING: Push Notification are disabled. To enable visit: Settings
        </Text>
        <Divider />
        <Text className="p-2 opacity-60 mt-4">MESSAGE NOTIFICATIONS</Text>
        <View className="w-full  bg-white">
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Show Notifications</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <Switch
              value={checked}
              onValueChange={(value) => setChecked(value)}
            />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Sound</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Text>Note</Text>
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
        </View>

        <Text className="p-2 opacity-60 mt-4">Group NOTIFICATIONS</Text>
        <View className="w-full  bg-white">
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Show Notifications</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <Switch
              value={checked2}
              onValueChange={(value) => setChecked2(value)}
            />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Sound</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Text>Note</Text>
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
        </View>
        <View className="w-full mt-4  bg-white">
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">In-App Notifications</Text>
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
                <Text className="font-semibold">Show Preview</Text>
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
                <Text className="font-semibold text-red-500">
                  Reset Notification Settings
                </Text>
              </TouchableOpacity>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>
    </View>
  );
}
