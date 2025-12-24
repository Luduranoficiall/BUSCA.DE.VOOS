import { View, Text, ScrollView } from "react-native";
import { Colors, Spacing, Font } from "../theme/tokens";

export default function Affiliates() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.bg, padding: Spacing.lg }}>
      <Text style={{ color: Colors.text, fontSize: Font.h1, marginBottom: Spacing.md }}>
        Afiliados e Compliance
      </Text>
      <Text style={{ color: Colors.text, fontSize: Font.body }}>
        O Aurora Travel utiliza links de afiliados de parceiros como Amadeus, Booking, Expedia, Viator e GetYourGuide. Ao reservar por nossos links, você apoia o projeto sem custo extra. Transparência e compliance são prioridades.
      </Text>
    </ScrollView>
  );
}
