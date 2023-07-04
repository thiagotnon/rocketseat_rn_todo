import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Check } from "phosphor-react-native";

type Props = {
  label: string;
  status: boolean;
  onPress: () => void;
};

export const RadioBox = ({ label, status, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={status ? styles.outerChecked : styles.outer}
        onPress={onPress}
      >
        {status && (
          <View style={styles.inner}>
            <Check color="#fff" size={10} weight="fill" />
          </View>
        )}
      </TouchableOpacity>
      <Text style={status ? styles.textCheched : styles.text}>{label}</Text>
    </View>
  );
};
