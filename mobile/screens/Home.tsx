import { View, Text, TextInput, Pressable } from "react-native";
import Card from "../components/Card";
import { Colors, Spacing, Font } from "../theme/tokens";

type HomeProps = {
  onSearch: () => void;
};

export default function Home({ onSearch }: HomeProps) {
  return (
    <View style={{ padding: Spacing.lg, backgroundColor: Colors.bg, flex: 1 }}>
      <Text style={{ color: Colors.text, fontSize: Font.h1, marginBottom: Spacing.lg }}>
        Aurora.Travel
      </Text>
      <Card>
        <TextInput placeholder="Origem (GRU)" placeholderTextColor={Colors.muted} />
        <TextInput placeholder="Destino" placeholderTextColor={Colors.muted} />
        <Pressable onPress={onSearch} style={{ marginTop: Spacing.md }}>
          <Text style={{ color: Colors.primary, fontSize: Font.body }}>Buscar</Text>
        </Pressable>
      </Card>
    </View>
  );
}
