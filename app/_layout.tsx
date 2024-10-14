import { SessionProvider } from "@/components/AuthContext";
import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <PaperProvider>
      <SessionProvider>
        <Slot
          screenOptions={{
            contentStyle: {
              paddingTop: 24,
              paddingHorizontal: 16,
            },
          }}
        />
      </SessionProvider>
    </PaperProvider>
  );
}
