import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Doc from "../assets/images/doc.png";
import { FontAwesome6 } from "@expo/vector-icons";
export default function Message({
  user,
  img,
  text,
}: {
  user?: boolean;
  img?: boolean;
  text?: string;
}) {
  return (
    <View
      className="p-3 pb-2 mt-2 mx-3 rounded-xl relative"
      style={{
        backgroundColor: user ? "#dcf7c5" : "white",
        maxWidth: wp(70),
        borderBottomLeftRadius: !user ? 0 : "12rem",
        borderBottomRightRadius: user ? 0 : "12rem",
        alignSelf: user ? "flex-end" : "flex-start",
      }}
    >
      {img && (
        <View
          className="p-1 flex-row items-center rounded-md"
          style={{ backgroundColor: user ? "#d0e8bd" : "#e5e7eb" }}
        >
          <Image source={Doc} className="object-fit w-10 h-10" />
          <Text>IMG_045</Text>
        </View>
      )}
      {text && <Text>{text}</Text>}
      <View className="opacity-40 ml-auto  flex-row items-center">
        <Text className="">11:30 pm </Text>
        <FontAwesome6 name="check-double" size={10} color="blue" />
      </View>
    </View>
  );
}
