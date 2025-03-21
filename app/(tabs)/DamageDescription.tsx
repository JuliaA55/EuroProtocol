import { View, Text, TextInput,StyleSheet,Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function DamageDescription() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Опис пошкоджень:</Text>
      <TextInput style={styles.input} multiline />
      <Button title="Оформити" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 8, marginVertical: 10, borderRadius: 5, height: 100 },
  container:{flex: 1, padding: 20, marginTop: 20, backgroundColor:'lightgray'},
});


