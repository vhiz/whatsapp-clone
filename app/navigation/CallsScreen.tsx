import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Avatar, Header, ListItem } from "@rneui/themed";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function CallsScreen() {
  const [index, setIndex] = useState(0);
  return (
    <View className="flex-1 bg-white">
      <Header
        backgroundColor="#f6f6f6"
        leftComponent={<Text className="text-primary">Edit </Text>}
        centerComponent={
          <View
            className="flex-row items-center rounded-md border-primary border"
            style={{ width: wp(40) }}
          >
            <TouchableOpacity
              onPress={() => setIndex(0)}
              className={`${
                index === 0 ? "bg-primary" : "transparent"
              } w-1/2 p-2`}
            >
              <Text
                className={`text-center ${
                  index === 0 ? "text-white" : "text-black"
                }`}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIndex(1)}
              className={`${
                index === 1 ? "bg-primary" : "transparent"
              } w-1/2 p-2`}
            >
              <Text
                className={`text-center ${
                  index === 1 ? "text-white" : "text-black"
                }`}
              >
                Missed
              </Text>
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <TouchableOpacity>
            <Feather name="phone-call" size={24} color="blue" />
          </TouchableOpacity>
        }
      />
      <ScrollView>
        {Array(30)
          .fill(null)
          .map((_, i) => {
            const img = `https://randomuser.me/api/portraits/${
              i % 2 ? "women" : "men"
            }/${i + 10}.jpg`;
            return (
              <ListItem key={i} bottomDivider containerStyle={{ padding: 10 }}>
                <Avatar
                  rounded
                  size={50}
                  source={{
                    uri: img,
                  }}
                />
                <ListItem.Content style={{ padding: 0 }}>
                  <View className="flex-row items-center w-full justify-between">
                    <View>
                      <Text className="font-semibold text-lg">
                        Roxie Schmidt
                      </Text>
                      <View className="flex-row items-center gap-1 opacity-40">
                        <FontAwesome name="phone" size={15} color="black" />
                        <Text>outgoing</Text>
                      </View>
                    </View>
                    <Text>10/13/24</Text>
                  </View>
                </ListItem.Content>
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="blue"
                />
              </ListItem>
            );
          })}
      </ScrollView>
    </View>
  );
}
