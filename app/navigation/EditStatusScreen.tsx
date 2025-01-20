import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function EditStatusScreen({ navigation }: { navigation: any }) {
  const [index, setIndex] = useState(0);
  const colors = ["#db2777", "#2563eb", "#16a34a", "#ca8a04", "#4b5563"];
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

    useEffect(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBackgroundColor(randomColor);
    }, []);
  const selectRandom = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };
  return (
    <View
      className="flex-1 transition-all ease-in-out"
      style={{ backgroundColor }}
    >
      <View className="flex-row p-3 py-5 justify-between items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="format-text"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={selectRandom}>
            <Ionicons name="color-palette" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: hp(70) }} className="p-3">
        <TextInput
          className="flex-1 text-white"
          placeholder="Type Here......."
          placeholderTextColor={"rgb(255 255 255 / 0.6)"}
          textAlign="center"
          multiline
          style={{ fontSize: wp(10) }}
        />
      </View>
    </View>
  );
}
