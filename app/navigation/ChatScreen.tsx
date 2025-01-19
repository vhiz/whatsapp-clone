import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {  BottomSheet, Header, ListItem } from "@rneui/themed";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { messageData } from "@/data/dummy";
import Animated, {
  SharedTransitionType,
  withSpring,
} from "react-native-reanimated";
import Message from "@/components/Message";
import { SharedTransition } from "react-native-reanimated";

export default function ChatScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { chatId } = route.params;
  const chat = messageData.find((chat) => chat.id === chatId);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

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
    <View className="flex-1 bg-white">
      <Header
        backgroundColor="#f6f6f6"
        leftComponent={
          <Pressable
            hitSlop={20}
            className="mt-2"
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-small-left" size={40} color="blue" />
          </Pressable>
        }
        centerComponent={
          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              onPress={() => navigation.push("Contact", { contactId: chatId })}
            >
              <Animated.Image
                sharedTransitionStyle={transition}
                source={{ uri: chat?.avatar }}
                sharedTransitionTag={chat?.avatar}
                className={"rounded-full w-16 h-16 object-cover"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className=""
              onPress={() => navigation.push("Contact", { contactId: chatId })}
            >
              <Text className="text-lg line-clamp-1 font-bold">
                {chat?.username}
              </Text>
              <Text className="opacity-40">tap here for contact info</Text>
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <View className="flex-row items-center gap-6 mt-2">
            <TouchableOpacity>
              <Feather name="video" size={24} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="phone" size={24} color="blue" />
            </TouchableOpacity>
          </View>
        }
      />
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/736x/d2/a7/76/d2a77609f5d97b9081b117c8f699bd37.jpg",
        }}
        className="flex-1"
      >
        <View className="flex-1 bg-white/80">
          <ScrollView showsVerticalScrollIndicator={false}>
            <Message
              user
              text="perfectly distance making best brief tales somehow library stock trap managed beside diameter plate stick related hand loud gulf soon total promised home excited"
            />
            <Message text="income mud seat vowel tide space sight enjoy pay conversation nation tie selection young day better spell lead bag cool medicine have stage customs" />
            <Message img />
            <Message text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder" />
            <Message
              user
              text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder"
            />
            <Message
              user
              text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder"
            />
            <Message
              user
              text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder"
            />
            <Message
              user
              text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder"
            />
            <Message text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder" />
            <Message
              user
              text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder"
            />
            <Message
              user
              text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder"
            />
            <Message
              img
              text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder"
            />
            <Message
              user
              text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder"
            />
            <Message
              user
              text="automobile distance toy blue farmer stone lift flew morning tape whatever lake team hello everybody manufacturing ought fall stage sheep swim know indeed wonder"
            />
          </ScrollView>
          <View className="flex-row items-center justify-between gap-3 bg-white mt-2 p-2 w-full">
            <Pressable onPress={toggleOpen}>
              <AntDesign name="plus" size={24} color="blue" />
            </Pressable>
            <View className="rounded-full w-[70%] p-1 py-0 border border-gray-300 flex-row items-center">
              <TextInput className="grow" />
              <TouchableOpacity onPress={toggleOpen}>
                <Feather name="file" size={24} color="blue" />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center gap-2">
              <TouchableOpacity onPress={toggleOpen}>
                <EvilIcons name="camera" size={24} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleOpen}>
                <Feather name="mic" size={24} color="blue" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
      <BottomSheet
        modalProps={{}}
        isVisible={open}
        onBackdropPress={toggleOpen}
      >
        <View className="bg-transparent p-2 gap-3">
          <View className="rounded-2xl bg-white">
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full p-4 h-full flex-row items-center">
                <EvilIcons name="camera" size={24} color="blue" />
                <Text className="text-primary">Camera </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full p-4 h-full flex-row items-center gap-2">
                <SimpleLineIcons name="picture" size={18} color="blue" />
                <Text className="text-primary">Picture & Video Library </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full p-4 h-full flex-row items-center">
                <AntDesign name="file1" size={24} color="blue" />
                <Text className="text-primary">Document </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full p-4 h-full flex-row items-center">
                <Entypo name="location-pin" size={24} color="blue" />
                <Text className="text-primary">Location </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full gap-2 p-4 h-full flex-row items-center">
                <FontAwesome name="user-circle-o" size={24} color="blue" />
                <Text className="text-primary">Contact </Text>
              </TouchableOpacity>
            </ListItem>
          </View>
          <View className="rounded-2xl bg-white">
            <ListItem
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity
                onPress={toggleOpen}
                className="w-full p-4 h-full"
              >
                <Text className="text-center text-primary">Cancel </Text>
              </TouchableOpacity>
            </ListItem>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}
