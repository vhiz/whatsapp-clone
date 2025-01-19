import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { memo, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Header, ListItem, SearchBar } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { BottomSheet, Divider } from "@rneui/base";
import CountryList from "../../data/CountryCodes.json";
export default function RegisterScreen({ navigation }: { navigation: any }) {
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
        centerComponent={
          <Text className="font-semibold text-xl">Phone Number</Text>
        }
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text className="text-primary">Done</Text>
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <Text className="text-center p-5 text-lg px-7">
          Please confirm your country code and enter your phone number
        </Text>
        <TouchableOpacity
          onPress={toggleVisible}
          className="flex-row items-center justify-between border-y border-gray-200 p-3"
        >
          <Text className="text-lg text-primary">{selected.name}</Text>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-row items-center justify-between border-y border-gray-200 p-3">
          <Text className="text-lg text-primary border-r border-gray-200">
            {selected.dial_code}
          </Text>
          <TextInput keyboardType="phone-pad" className="grow" />
        </View>
        <BottomSheet modalProps={{}} isVisible={visible}>
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
      </ScrollView>
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
