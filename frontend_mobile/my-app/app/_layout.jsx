import { Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { View, ActivityIndicator } from "react-native";
import useAuthGuard from "@/lib/useAuthGuard";

export default function RootLayout() {
 
  const { loading, redirect } = useAuthGuard();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (redirect) return redirect;

  return ( <SafeScreen>
    <Stack screenOptions={{headerShown : false}}/>
  </SafeScreen>
  );
}
