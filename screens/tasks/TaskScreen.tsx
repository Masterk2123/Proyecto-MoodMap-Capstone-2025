import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

const TaskScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<{ id: string; title: string; done: boolean }[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now().toString(),
      title: newTask,
      done: false,
    };
    setTasks(prev => [...prev, task]);
    setNewTask('');
    setModalVisible(false);
  };

  const handleDeleteTask = (id: string) => { 
    Alert.alert('Eliminar tarea', '¿Estás seguro de que deseas eliminar esta tarea?', [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => setTasks(prev => prev.filter(task => task.id !== id)),
        },
      ]);
    };

  const toggleTaskDone = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const renderTask = ({item}: { item: {id: string; title: string; done: boolean} }) => (
    <View style={styles.taskItemContainer}>

      <TouchableOpacity
        style={[styles.taskItem, item.done && styles.taskDone]}
        onPress={() => toggleTaskDone(item.id)}>

      <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Text style={{ color: 'red', fontSize: 16 }}>Eliminar</Text>
        </TouchableOpacity>

        <Text style={styles.taskText}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis Tareas</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.addButton}>+ Agregar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <TextInput
            placeholder="Nueva tarea"
            value={newTask}
            onChangeText={setNewTask}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleAddTask} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  taskItemContainer: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    fontSize: 18,
    color: 'blue',
  },
  taskItem: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  taskDone: {
    backgroundColor: '#d4edda',
  },
  taskText: {
    fontSize: 16,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default TaskScreen;
