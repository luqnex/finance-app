import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ButtonSaveProps = {
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export const ButtonSave = ({ label, onPress }: ButtonSaveProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
