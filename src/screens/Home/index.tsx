import { Header } from "../../components/Header";
import { TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import PlusCircle from "phosphor-react-native/src/icons/PlusCircle";

export const Home = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#6b6b6b"
            placeholder="Adicione uma nova tarefa"
          />
          <TouchableOpacity style={styles.button}>
            <PlusCircle size={32} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
