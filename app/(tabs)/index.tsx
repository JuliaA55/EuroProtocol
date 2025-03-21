import { View, StyleSheet, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.textStyle}>Електронний Європротокол</Text>
      <Button title='Оформити' onPress={() => router.push('/(tabs)/ParticipantA')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightgray'
  },
  textStyle:{
    fontSize: 24,
    marginBottom: 20
  }
});
