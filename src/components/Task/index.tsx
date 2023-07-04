import { Trash } from "phosphor-react-native";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { RadioBox } from "../RadioBox";

type Props = {
  label: string;
  status: boolean;
  closeTask: () => void;
  removeTask: () => void;
};
export const Task = ({ label, status, closeTask, removeTask }: Props) => {
  return (
    <View style={styles.container}>
      <RadioBox label={label} status={status} onPress={closeTask} />
      <TouchableOpacity style={styles.button} onPress={removeTask}>
        <Trash size={14} color="#808080" />
      </TouchableOpacity>
    </View>
  );
};
