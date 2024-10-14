import { useSession } from "@/components/AuthContext";
import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await signIn({ email, password });
    setLoading(false);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <TextInput
        placeholder="EMAIL OR USERNAME"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="PASSWORD"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Button mode="contained" onPress={handleLogin} loading={loading}>
        Sign In
      </Button>
    </View>
  );
}
