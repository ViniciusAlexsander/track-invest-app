import { login } from "@/api/auth";
import { ILoginRequest } from "@/api/types/auth";
import { useStorageState } from "@/hooks/useStorageState";
import { axiosClient } from "@/shared/configs/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, useContext, type PropsWithChildren } from "react";

const AuthContext = createContext<{
  signIn: (body: ILoginRequest) => Promise<void>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: async (body: ILoginRequest) => {
    return Promise.resolve();
  },
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: async (body: ILoginRequest) => {
          try {
            const response = await login(body);
            setSession(response.access_token);
            const jsonValue = JSON.stringify(response.access_token);
            await AsyncStorage.setItem("authToken", jsonValue);

            router.replace("/");
          } catch (error) {}
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
