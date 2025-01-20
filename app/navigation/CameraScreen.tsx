import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Overlay } from "@rneui/themed";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as MediaLibrary from "expo-media-library";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AlbumEntry from "@/components/AlbumEntry";
export default function CameraScreen({ navigation }: { navigation: any }) {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();

  const [albums, setAlbums] = useState<MediaLibrary.Album[] | null>(null);
  const [permissionResponse, requestPermissionMedia] =
    MediaLibrary.usePermissions();

  async function getAlbums() {
    if (permissionResponse?.status !== "granted") {
      await requestPermissionMedia();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });
    setAlbums(fetchedAlbums);
  }

  useEffect(() => {
    getAlbums();
  }, [permission?.granted]);
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  return (
    <View className="flex-1 bg-black">
      <Overlay isVisible={!permission}>
        <View className="w-full flex-row items-center gap-2">
          <ActivityIndicator size={"large"} />
          <Text>Please Wait....</Text>
        </View>
      </Overlay>
      <Overlay
        overlayStyle={{ padding: 0, width: wp(50) }}
        isVisible={!permission?.granted}
      >
        <View className="w-full items-center gap-2">
          <Text className="text-center p-2">
            We need your permission to show the camera
          </Text>
          <View className="flex-row border-t border-gray-300 w-full">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="border-r border-gray-300 w-1/2 p-2"
            >
              <Text className="text-center">Cancel </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={requestPermission}
              className="border-l border-gray-300 w-1/2 p-2"
            >
              <Text className="text-center">Allow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <Overlay
        overlayStyle={{ padding: 0, width: wp(50) }}
        isVisible={!permissionResponse?.granted}
      >
        <View className="w-full items-center gap-2">
          <Text className="text-center p-2">
            We need your permission to access your images
          </Text>
          <View className="flex-row border-t border-gray-300 w-full">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="border-r border-gray-300 w-1/2 p-2"
            >
              <Text className="text-center">Cancel </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={getAlbums}
              className="border-l border-gray-300 w-1/2 p-2"
            >
              <Text className="text-center">Allow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <View className="flex-row p-2 py-5 justify-between items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={34} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="flash-on" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ width: wp(100), height: hp(80) }}>
        <CameraView style={{ flex: 1 }} facing={facing}>
          <View className="mt-auto gap-3">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ height: hp(15) }}
            >
              {albums && albums.map((album) => <AlbumEntry album={album} />)}
            </ScrollView>
            <View className="p-3 justify-between items-center flex-row">
              <TouchableOpacity>
                <Ionicons name="images" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="circle" size={50} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleCameraFacing}>
                <MaterialIcons name="cameraswitch" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </CameraView>
      </View>
    </View>
  );
}
