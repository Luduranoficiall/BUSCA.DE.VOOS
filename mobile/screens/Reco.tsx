import { View, Text, ScrollView } from "react-native";
import { Colors, Spacing, Font } from "../theme/tokens";

export default function Reco({ recommendations }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.lg }}>
      <Text style={{ color: Colors.primary, fontSize: Font.h1, marginBottom: Spacing.md }}>
        Recomendações
      </Text>
      <Text style={{ color: Colors.text, fontSize: Font.body }}>
        {recommendations || 'Nenhuma recomendação disponível.'}
      </Text>
    </ScrollView>
  );
}
