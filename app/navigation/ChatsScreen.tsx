import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  BackHandler,
} from "react-native";
import React, { memo, useCallback, useEffect, useState } from "react";
import {
  Avatar,
  BottomSheet,
  Button,
  CheckBox,
  Header,
  ListItem,
} from "@rneui/themed";
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { messageData } from "../../data/dummy";
import Animated, {
  FadeInLeft,
  FadeOutLeft,
  SharedTransition,
  SharedTransitionType,
  withSpring,
} from "react-native-reanimated";
export default function ChatsScreen({ navigation }: { navigation: any }) {
  const [messages, setMessages] = useState(messageData);
  const [page, setPage] = useState(1);
  const [editOpen, setEditOpen] = useState(false);
  const [isMore, setIsMore] = useState(false);

  const toggleMore = () => setIsMore(!isMore);
  const toggleEdit = () => {
    setEditOpen(!editOpen);
  };

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <Item
        toggleMore={toggleMore}
        item={item}
        open={editOpen}
        navigation={navigation}
      />
    ),
    [editOpen]
  );
  const loadMoreMessages = () => {
    const newMessages = messageData.slice(page * 10, (page + 1) * 10);
    if (newMessages.length > 0) {
      setMessages((prev) => [...prev, ...newMessages]);
      setPage((prev) => prev + 1);
    }
  };
  return (
    <View className="flex-1 bg-white">
      <Header
        backgroundColor="#f6f6f6"
        centerComponent={
          <Text
            style={{ opacity: editOpen ? 0 : 1 }}
            className="font-semibold text-xl"
          >
            Chats
          </Text>
        }
        rightComponent={
          <TouchableOpacity
            disabled={editOpen}
            onPress={toggleEdit}
            style={{ opacity: editOpen ? 0 : 1 }}
          >
            <FontAwesome name="edit" size={24} color="black" />
          </TouchableOpacity>
        }
        leftComponent={
          <TouchableOpacity onPress={toggleEdit}>
            <Text className="text-primary text-lg">
              {editOpen ? "Done" : "Edit"}{" "}
            </Text>
          </TouchableOpacity>
        }
      />

      <View
        className="w-full flex-row justify-between items-center p-3"
        style={{ opacity: editOpen ? 0.3 : 1 }}
      >
        <TouchableOpacity disabled={editOpen}>
          <Text className="text-primary text-lg">Broadcast List </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={editOpen}>
          <Text className="text-primary text-lg">New Group </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        style={{ width: wp(100) }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, i) => i.toString()}
        renderItem={renderItem}
        initialNumToRender={10}
        maxToRenderPerBatch={3}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreMessages}
        removeClippedSubviews
      />
      <BottomSheet
        modalProps={{}}
        isVisible={isMore}
        onBackdropPress={toggleMore}
      >
        <View className="bg-transparent p-2 gap-3">
          <View className="rounded-2xl bg-white">
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full p-4 h-full">
                <Text className="text-center text-primary">Mute </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full p-4 h-full">
                <Text className="text-center text-primary">Contact info </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full p-4 h-full">
                <Text className="text-center text-primary">Export Chat </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full p-4 h-full">
                <Text className="text-center text-primary">Clear Chat </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity className="w-full p-4 h-full">
                <Text className="text-center text-red-500">Delete Chat </Text>
              </TouchableOpacity>
            </ListItem>
          </View>
          <View className="rounded-2xl bg-white">
            <ListItem
              containerStyle={{ backgroundColor: "transparent", padding: 0 }}
            >
              <TouchableOpacity
                onPress={toggleMore}
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

const Item = memo(function Item({
  item,
  toggleMore,
  open,
  navigation,
}: {
  item: any;
  toggleMore: () => void;
  open: boolean;
  navigation: any;
}) {
  const [selected, setSelected] = useState(false);
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
    <ListItem.Swipeable
      bottomDivider
      topDivider
      onPress={() => {
        open && setSelected(!selected);
      }}
      containerStyle={{ padding: 7 }}
      rightWidth={wp(100) / 2}
      rightContent={(reset) => (
        <View className="flex-row w-full h-full">
          <TouchableOpacity
            className="items-center justify-center p-2 gap-2 h-full"
            style={{ width: wp(25), backgroundColor: "#6b7280" }}
            onPress={() => toggleMore()}
          >
            <Feather name="more-horizontal" size={20} color="white" />
            <Text className="text-white">More </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="items-center justify-center p-2 gap-2 h-full"
            style={{ width: wp(25), backgroundColor: "#3e70a7" }}
            onPress={() => reset()}
          >
            <FontAwesome name="archive" size={20} color="white" />
            <Text className="text-white">Archive</Text>
          </TouchableOpacity>
        </View>
      )}
    >
      <View className="items-center flex-row">
        {open && (
          <Animated.View entering={open ? FadeInLeft.delay(500) : FadeOutLeft}>
            <CheckBox
              checked={selected}
              uncheckedIcon={<Entypo name="circle" size={20} color="black" />}
              checkedIcon={
                <FontAwesome5 name="dot-circle" size={20} color="black" />
              }
              containerStyle={{ padding: 0 }}
              style={{ padding: 0 }}
            />
          </Animated.View>
        )}
        <TouchableOpacity
          onPress={() => navigation.push("Contact", { contactId: item.id })}
        >
          <Animated.Image
            source={{ uri: item.avatar }}
            sharedTransitionStyle={transition}
            sharedTransitionTag={item.avatar}
            className={"rounded-full w-14 h-14 object-cover"}
          />
        </TouchableOpacity>
      </View>
      <ListItem.Content>
        <TouchableOpacity
          className="flex-row items-center relative"
          style={{ height: hp(9) }}
          onPress={() => navigation.push("Chat", { chatId: item.id })}
        >
          <View className="h-full w-full justify-between">
            <View className="w-full flex-row justify-between">
              <Text className="font-bold text-lg">{item.username} </Text>
              <Text className="opacity-60">{item.timeStamp} </Text>
            </View>
            <View className="flex-row gap-1 opacity-40 pr-4 items-end">
              <FontAwesome6 name="check-double" size={10} color="blue" />
              <Text className="line-clamp-2">{item.lastMessage}</Text>
            </View>
          </View>
          <View className="absolute right-0 opacity-40">
            <Entypo name="chevron-small-right" size={25} color="black" />
          </View>
        </TouchableOpacity>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
});
