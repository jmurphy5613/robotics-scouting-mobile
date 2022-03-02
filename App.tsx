import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    height: '100%',
    width: '100%',
  },
  test: {
    color: '#ffffff',
    marginTop: '100%',
    marginLeft: '100%'
  }
})


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Welcome to, Jordan</Text>
      <StatusBar style="auto" />
    </View>
  );
}
