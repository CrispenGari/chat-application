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
