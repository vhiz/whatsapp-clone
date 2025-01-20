import { View, Text, TextInput, ScrollView } from "react-native";
import React, { memo, useState } from "react";
import {
  BottomSheet,
  Divider,
  Header,
  ListItem,
  SearchBar,
} from "@rneui/themed";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CountryList from "../../data/CountryCodes.json";
import { Entypo } from "@expo/vector-icons";

export default function EditScreen({ navigation }: { navigation: any }) {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);
  const [selected, setSelected] = useState(CountryList[157]);
  const [search, setSearch] = useState("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };
  function selectCOuntry(country: any) {
    setSelected(country);
    toggleVisible();
  }
  return (
    <View className="flex-1 bg-white">
      <Header
        backgroundColor="#f6f6f6"
        leftComponent={
          <Pressable
            hitSlop={20}
            className=" flex-row items-center"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-primary line-clamp-1">Cancel</Text>
          </Pressable>
        }
        centerComponent={
          <Text className="text-xl font-bold">Edit Contact</Text>
        }
        rightComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-primary">Save </Text>
          </TouchableOpacity>
        }
      />
      <View className="">
        <View className="flex-row p-2 gap-3">
          <Text className="text-lg font-semibold">Name</Text>
          <View className="w-full">
            <TextInput
              className="w-[70%] border-l-2 border-gray-300"
              placeholder="FirstName"
            />
            <Divider />
            <TextInput
              className="w-[70%] border-l-2 border-gray-300"
              placeholder="LastName"
            />
          </View>
        </View>
        <Divider />
        <ListItem bottomDivider>
          <View className="gap-4">
            <Text className="text-lg font-semibold">Phone</Text>
            <View className="flex-row items-center">
              <Text className="text-lg font-semibold text-primary">mobile</Text>
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </View>
          </View>
          <ListItem.Content>
            <TouchableOpacity
              onPress={toggleVisible}
              className="w-full justify-between flex-row"
            >
              <Text>{selected.name}</Text>
              <Entypo name="chevron-small-right" size={24} color="blue" />
            </TouchableOpacity>
            <View className="flex-row items-center justify-between border-t border-gray-200 p-3">
              <Text className="text-lg text-primary border-r border-gray-200">
                {selected.dial_code}
              </Text>
              <TextInput
                style={{ width: wp(70) }}
                className="border-l-2 border-gray-300"
                placeholder=""
                keyboardType="phone-pad"
              />
            </View>
          </ListItem.Content>
        </ListItem>
        <View className="p-2 gap-2">
          <Text className="text-lg text-primary">
            more fields
          </Text>
          <Text className="text-lg text-red-500">
            Delete Contact
          </Text>
        </View>
      </View>
      <BottomSheet
        modalProps={{}}
        isVisible={visible}
        onBackdropPress={toggleVisible}
      >
        <SearchBar
          placeholder="Search country"
          onChangeText={updateSearch}
          value={search}
          lightTheme
        />
        <ScrollView style={{ height: hp("50%"), backgroundColor: "white" }}>
          {CountryList.filter((country) =>
            country.name.toLowerCase().includes(search.toLowerCase())
          ).map((country) => (
            <Item
              key={country.name}
              selectCOuntry={selectCOuntry}
              country={country}
            />
          ))}
        </ScrollView>
      </BottomSheet>
    </View>
  );
}
const Item = memo(function Item({
  selectCOuntry,
  country,
}: {
  selectCOuntry: any;
  country: any;
}) {
  return (
    <ListItem
      bottomDivider
      key={country.name}
      onPress={() => selectCOuntry(country)}
    >
      <ListItem.Content>
        <Text>{country.name}</Text>
      </ListItem.Content>
    </ListItem>
  );
});
