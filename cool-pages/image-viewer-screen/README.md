### Image Viewer Component

In this one we are going to create an image viewer component that will be able to view the image. First we are going to install the following packages

```shell
npm i @likashefqet/react-native-image-zoom react-native-root-siblings
```

So we want to say when we click the link component we want to navigate the the image view page.

```tsx
import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  const uri = "https://crispen-gari.web.app/81836eff-d.jpeg";
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link
        asChild
        href={{
          pathname: "/[url]",
          params: {
            url: uri,
          },
        }}
      >
        <TouchableOpacity>
          <Image source={{ uri }} style={{ width: 200, height: 200 }} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Page;
```

The image viewer screen looks as follows:

```ts
import { Ionicons, Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Stack, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";
import { RootSiblingParent } from "react-native-root-siblings";

const Page = () => {
  const { url } = useLocalSearchParams<{
    url: string;
  }>();
  const { bottom } = useSafeAreaInsets();

  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <Stack.Screen />
        <ImageZoom
          uri={url}
          minScale={0.5}
          maxScale={5}
          minPanPointers={1}
          doubleTapScale={2}
          isSingleTapEnabled
          isDoubleTapEnabled
          style={styles.image}
          resizeMode="contain"
        />

        <BlurView
          intensity={95}
          tint={"dark"}
          style={[styles.blurview, { paddingBottom: bottom }]}
        >
          <View style={styles.row}>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="white"
              />
              <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Ionicons name="brush-outline" size={24} color="white" />
              <Text style={styles.btnText}>Select</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {}}
            >
              <Octicons name="download" size={24} color="white" />
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {}}
            >
              <Octicons name="share" size={24} color="white" />
              <Text style={styles.btnText}>Share</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  blurview: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btnText: {
    color: "#fff",
    fontSize: 12,
    paddingTop: 6,
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  titleText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  promptText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonText: {
    color: "gray",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  closeBtn: {
    backgroundColor: "black",
    borderRadius: 20,
    height: 26,
    width: 26,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Page;
```