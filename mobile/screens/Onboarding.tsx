import { View, Text, ScrollView } from "react-native";
import { Colors, Spacing, Font } from "../theme/tokens";

export default function Onboarding() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.lg }}>
      <Text style={{ color: Colors.primary, fontSize: Font.h1, marginBottom: Spacing.md }}>
        Bem-vindo ao Aurora Travel
      </Text>
      <Text style={{ color: Colors.text, fontSize: Font.body }}>
        Descubra, compare e reserve voos, hotéis e passeios no mundo todo. Recomendações personalizadas, monetização transparente e experiência premium.
      </Text>
    </ScrollView>
  );
}
