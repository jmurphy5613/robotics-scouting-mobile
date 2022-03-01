import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    height: '100vh',
    width: '100vw',
  }
})


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to, Jordan</Text>
      <StatusBar style="auto" />
    </View>
  );
}
