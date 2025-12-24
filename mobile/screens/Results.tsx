import { View, Text, ScrollView } from "react-native";
import { Colors, Spacing, Font } from "../theme/tokens";

export default function Results({ results }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.lg }}>
      <Text style={{ color: Colors.primary, fontSize: Font.h1, marginBottom: Spacing.md }}>
        Resultados
      </Text>
      <Text style={{ color: Colors.text, fontSize: Font.body }}>
        {results ? JSON.stringify(results, null, 2) : 'Nenhum resultado.'}
      </Text>
    </ScrollView>
  );
}
