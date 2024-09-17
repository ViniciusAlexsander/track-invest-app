import { fetchFindManyAssets } from "@/api/assets";
import { IAssets } from "@/api/types/assets";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { Image, Platform, StyleSheet } from "react-native";

export default function TabTwoScreen() {
  const [assets, setAssets] = useState<IAssets[]>();
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const obterAssets = async () => {
    setIsLoading(true);
    const assetsResponse = await fetchFindManyAssets();
    setAssets(assetsResponse);
    setIsLoading(false);
  };

  useEffect(() => {
    obterAssets();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ativos</ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">
        Lista de ativos disponiveis na sua carteira
      </ThemedText>

      {assets &&
        assets?.map((asset) => (
          <Collapsible key={asset.id} title={asset.code}>
            <ThemedText>
              <ThemedText type="defaultSemiBold">Tipo:</ThemedText> {asset.type}
            </ThemedText>
            <ThemedText>
              <ThemedText type="defaultSemiBold">Nome:</ThemedText> {asset.name}
            </ThemedText>
            <ThemedText>
              <ThemedText type="defaultSemiBold">Descrição:</ThemedText>{" "}
              {asset.description}
            </ThemedText>
          </Collapsible>
        ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
