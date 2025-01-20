import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";

export default function AlbumEntry({ album }: { album: MediaLibrary.Album }) {
  const [assets, setAssets] = useState<MediaLibrary.Asset[] | null>(null);

  useEffect(() => {
    async function getAlbumAssets() {
      const albumAssets = await MediaLibrary.getAssetsAsync({ album });
      setAssets(albumAssets.assets);
    }
    getAlbumAssets();
  }, [album]);
  return (
    <View key={album.id} className="h-full">
      <View className="w-full flex-row h-full">
        {assets &&
          assets.map((asset, i) => (
            <Image
              source={{ uri: asset.uri }}
              key={i}
              className="ml-2"
              style={{ width: 80, height: "100%" }}
            />
          ))}
      </View>
    </View>
  );
}
