import { View, Text, ScrollView } from "react-native";
import { Colors, Spacing, Font } from "../theme/tokens";

export default function Plans() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.lg }}>
      <Text style={{ color: Colors.primary, fontSize: Font.h1, marginBottom: Spacing.md }}>
        Planos
      </Text>
      <Text style={{ color: Colors.text, fontSize: Font.body }}>
        FREE: acesso básico, anúncios, links de afiliados.
        {"\n\n"}PRO: sem anúncios, recursos premium, suporte prioritário.
      </Text>
    </ScrollView>
  );
}
