import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.titleArea}>
        <Text style={styles.title}>Lista de Tarefas Escolares</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder={'Digite a tarefa...'} />

        <TouchableOpacity style = {styles.button}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3b1f2'
  },
  titleArea: {
    height: '10%',
    width: '75%',
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: '#945bc9',
    borderWidth: 3,
    borderColor: '#3a0d63',
    borderRadius: 6,
    marginHorizontal: 'auto', 
  },
  title: {
    fontSize: 20,
    color: '#e1a0e8',
    alignSelf: 'center',
    fontWeight: 600
  },
  inputArea: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: '#fff',
    width: '85%',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 15
  },
  input: {
    borderBottomWidth: 2,
    borderRadius: 3
  }
});
