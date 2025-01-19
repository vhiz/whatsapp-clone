import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Divider, Header, ListItem } from "@rneui/themed";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { messageData } from "@/data/dummy";
import Animated, {
  SharedTransition,
  SharedTransitionType,
  withSpring,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ContactInfoScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { contactId } = route.params;
  const chat = messageData.find((chat) => chat.id === contactId);
  const transition = SharedTransition.custom((values) => {
    "worklet";
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
    };
  })
    .progressAnimation((values, progress) => {
      "worklet";
      const getValue = (
        progress: number,
        target: number,
        current: number
      ): number => {
        return progress * (target - current) + current;
      };
      return {
        width: getValue(progress, values.targetWidth, values.currentWidth),
        height: getValue(progress, values.targetHeight, values.currentHeight),
      };
    })
    .defaultTransitionType(SharedTransitionType.ANIMATION);
  return (
    <View className="flex-1 bg-header">
      <Header
        backgroundColor="white"
        leftComponent={
          <Pressable
            hitSlop={20}
            className=" flex-row items-center"
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-small-left" size={24} color="blue" />
            <Text className="text-primary line-clamp-1">{chat?.username}</Text>
          </Pressable>
        }
        centerComponent={
          <Text className="text-xl font-bold">Contact Info</Text>
        }
        rightComponent={
          <TouchableOpacity onPress={() => navigation.push("EditContact")}>
            <Text className="text-primary">Edit </Text>
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.Image
          sharedTransitionStyle={transition}
          source={{ uri: chat?.avatar }}
          sharedTransitionTag={chat?.avatar}
          className=" object-cover"
          style={{ width: wp(100), height: hp(60) }}
        />
        <View className="bg-white">
          <View className="w-full p-3 justify-between flex-row">
            <View>
              <Text className="font-bold text-2xl">{chat?.username}</Text>
              <Text className="opacity-60">+234 000 664 00998</Text>
            </View>
            <View className="flex-row items-center gap-3">
              <TouchableOpacity className="rounded-full items-center p-2 justify-center w-14 h-14 bg-gray-300">
                <Ionicons name="chatbubble-sharp" size={18} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full items-center p-2 justify-center w-14 h-14 bg-gray-300">
                <Ionicons name="videocam" size={18} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full items-center p-2 justify-center w-14 h-14 bg-gray-300">
                <FontAwesome name="phone" size={18} color="blue" />
              </TouchableOpacity>
            </View>
          </View>
          <Divider />

          <View className="gap-2 p-2">
            <Text>
              fourth sets wear know rush thus slave floating various visitor
              only badly name setting keep solve
            </Text>
            <Text>Dec 18, 2030</Text>
          </View>
        </View>

        <View className="w-full mt-4 bg-white">
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Media, Links, and Docs</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Text>12</Text>
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Starred Messages</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Text>None</Text>
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Chat Search</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
        </View>
        <View className="mt-4">
          <ListItem>
            <ListItem.Content>
              <TouchableOpacity className="w-full">
                <Text className="font-semibold">Mute</Text>
              </TouchableOpacity>
            </ListItem.Content>
            <View className="flex-row opacity-40">
              <Text>No</Text>
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </ListItem>
        </View>
      </ScrollView>
    </View>
  );
}
