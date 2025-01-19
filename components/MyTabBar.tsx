import {
  Entypo,
  Feather,
  FontAwesome5,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();
  return (
    <View className="flex-row items-center justify-between w-full bg-header">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="p-2 flex-1 items-center justify-center"
            style={{ opacity: isFocused ? 1 : 0.5 }}
            key={index}
          >
            {index === 0 &&
              (isFocused ? (
                <Entypo name="circular-graph" size={20} color="black" />
              ) : (
                <Entypo name="circular-graph" size={20} color="black" />
              ))}
            {index === 1 &&
              (isFocused ? (
                <FontAwesome5 name="phone-alt" size={20} color="black" />
              ) : (
                <Feather name="phone" size={20} color="black" />
              ))}
            {index === 2 &&
              (isFocused ? (
                <Entypo name="camera" size={20} color="black" />
              ) : (
                <Feather name="camera" size={20} color="black" />
              ))}
            {index === 3 &&
              (isFocused ? (
                <Ionicons name="chatbubbles" size={20} color="black" />
              ) : (
                <Ionicons name="chatbubbles-outline" size={20} color="black" />
              ))}
            {index === 4 &&
              (isFocused ? (
                <Fontisto name="player-settings" size={20} color="black" />
              ) : (
                <Feather name="settings" size={20} color="black" />
              ))}

            <Text className="text-center dark:text-dark-text">
              {label.toString()}{" "}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}
