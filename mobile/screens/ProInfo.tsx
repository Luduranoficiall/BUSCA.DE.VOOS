import { View, Text, ScrollView } from "react-native";
import { Colors, Spacing, Font } from "../theme/tokens";

export default function ProInfo() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.lg }}>
      <Text style={{ color: Colors.gold, fontSize: Font.h1, marginBottom: Spacing.md }}>
        Aurora PRO
      </Text>
      <Text style={{ color: Colors.text, fontSize: Font.body }}>
        - Sem anúncios
        {"\n"}- Recomendações premium
        {"\n"}- Destaque de ofertas
        {"\n"}- Suporte prioritário
        {"\n"}- Mais novidades em breve!
      </Text>
    </ScrollView>
  );
}
