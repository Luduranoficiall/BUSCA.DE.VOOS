import { View, Text } from "react-native";
import { Colors, Font } from "../theme/tokens";

export default function Splash() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.bg, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: Colors.primary, fontSize: Font.h1, fontWeight: 'bold' }}>Aurora Travel</Text>
      <Text style={{ color: Colors.text, fontSize: Font.body, marginTop: 16 }}>Seu app global de viagens</Text>
    </View>
  );
}
