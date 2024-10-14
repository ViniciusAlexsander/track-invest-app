import { fetchFindManyInvest } from "@/api/assets";
import { IInvest } from "@/api/types/invest";
import { useSession } from "@/components/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

if (__DEV__) {
  require("../../ReactotronConfig");
}

export default function Index() {
  const { signOut, session } = useSession();
  const [invests, setInvests] = useState<IInvest[]>([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const response = await fetchFindManyInvest();
    setInvests(response);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 32,
        }}
      >
        <Text>TA LOGADO</Text>
        <Text onPress={signOut}>Sign Out</Text>
      </View>
      <FlatList
        style={{
          marginTop: 32,
        }}
        data={invests}
        renderItem={({ item }) => <IInvestCard invest={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

type IInvestCardProps = { invest: IInvest };

const IInvestCard = ({ invest }: IInvestCardProps) => (
  <View
    style={{
      gap: 8,
    }}
  >
    <View>
      <Text style={{ backgroundColor: "blue" }}>{invest.type}</Text>
    </View>

    <Text>Nome: {invest.name}</Text>
    <Text>Código de negociação: {invest.code}</Text>
    <View>
      <Text>Descrição:</Text>
      <Text>{invest.description}</Text>
    </View>
  </View>
);
