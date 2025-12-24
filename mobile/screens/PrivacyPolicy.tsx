import { View, Text, ScrollView } from "react-native";
import { Colors, Spacing, Font } from "../theme/tokens";

export default function PrivacyPolicy() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.lg }}>
      <Text style={{ color: Colors.text, fontSize: Font.h1, marginBottom: Spacing.md }}>
        Política de Privacidade
      </Text>
      <Text style={{ color: Colors.text, fontSize: Font.body }}>
        Sua privacidade é importante para nós. Coletamos apenas dados necessários para funcionamento do app, busca de viagens e recomendações personalizadas. Não vendemos dados. Para dúvidas, entre em contato.
      </Text>
    </ScrollView>
  );
}
