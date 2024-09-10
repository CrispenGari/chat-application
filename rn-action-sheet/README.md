### ActionSheet

In this one we are going to make use of the [react-native-action-sheet](https://github.com/expo/react-native-action-sheet) to create a very basic amazing UI in react-native apps.

First we need to install the [react-native-action-sheet](https://github.com/expo/react-native-action-sheet) by running the following command

```shell
yarn add @expo/react-native-action-sheet
```

Then next we are going to wrap our app within the `ActionSheetProvider`

```tsx
import { Stack } from "expo-router";

import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const InitialLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};
const RootLayout = () => {
  return (
    <ActionSheetProvider>
      <InitialLayout />
    </ActionSheetProvider>
  );
};

export default RootLayout;
```

Then this is how it is used.

```tsx
import { View, Text, Button } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Delete", "Save", "Cancel"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title: "What do you want to do?",
        titleTextStyle: { fontWeight: "700" },
        icons: [
          <Ionicons size={20} name="remove-outline" color={"red"} />,
          <Ionicons size={20} name="save" color={"black"} />,
          <Ionicons size={20} name="close" color={"black"} />,
        ],
        tintIcons: true,
      },

      (selectedIndex: number | undefined) => {
        switch (selectedIndex) {
          case 1:
            // Save
            break;
          case destructiveButtonIndex:
            // Delete
            break;
          case cancelButtonIndex:
          // Canceled
        }
      }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Open Menu" onPress={onPress} />
    </View>
  );
};

export default Home;
```

### Refs

1. [react-native-action-sheet](https://github.com/expo/react-native-action-sheet)
