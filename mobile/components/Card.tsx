import { View } from "react-native";
import { Colors, Radius, Spacing } from "../theme/tokens";

export default function Card({ children }) {
  return (
    <View style={{
      backgroundColor: Colors.card,
      borderRadius: Radius.lg,
      padding: Spacing.lg,
      marginBottom: Spacing.md
    }}>
      {children}
    </View>
  );
}
