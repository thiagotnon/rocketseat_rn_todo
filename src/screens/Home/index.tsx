import { Header, Task } from "../../components";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import PlusCircle from "phosphor-react-native/src/icons/PlusCircle";
import { ClipboardText } from "phosphor-react-native";
import { useState } from "react";
import uuid from "react-native-uuid";

type TaskProps = {
  id: string;
  title: string;
  status: boolean;
};
export const Home = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  function handleTaskAdd() {
    const newTask = {
      id: `${uuid.v4()}`,
      title: taskTitle,
      status: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setTaskTitle("");
  }
  function handleRemoveTask(task: { id: string; title: string }) {
    Alert.alert("Remover", `Deseja remover a tarefa ${task.title}`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((item) => item.id !== task.id)
          ),
      },
      { text: "Não", style: "cancel" },
    ]);
  }

  function handleCloseTask(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  }

  const totalTasks = tasks.length;
  const closedTasks = tasks.filter((item) => item.status === true).length;

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#6b6b6b"
            placeholder="Adicione uma nova tarefa"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
          <TouchableOpacity
            style={
              taskTitle.length === 0 ? styles.buttonDisabled : styles.button
            }
            onPress={handleTaskAdd}
            disabled={taskTitle.length === 0}
          >
            <PlusCircle size={15} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.counters}>
          <View style={styles.counterView}>
            <Text style={styles.createdText}>Criadas</Text>
            <Text style={styles.counter}>{totalTasks}</Text>
          </View>
          <View style={styles.counterView}>
            <Text style={styles.closedText}>Concluídas</Text>
            <Text style={styles.counter}>{closedTasks}</Text>
          </View>
        </View>

        <FlatList
          style={styles.taskList}
          showsVerticalScrollIndicator={false}
          data={tasks}
          renderItem={({ item }) => (
            <Task
              label={item.title}
              closeTask={() => handleCloseTask(item.id)}
              removeTask={() => handleRemoveTask(item)}
              status={item.status}
            />
          )}
          keyExtractor={({ id }) => id}
          ListEmptyComponent={() => (
            <View style={styles.emptyMessage}>
              <ClipboardText size={58} color="#3D3D3D" />
              <Text style={styles.listEmptyTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
};
