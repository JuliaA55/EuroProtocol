import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function ParticipantA() {
  const router = useRouter();
  const [data, setData] = useState({ name: '',birdthDate:'', carModel: '', phone: '' });

  return (
    
    <View style={{ padding: 20, marginTop: 100, backgroundColor:'lightgray' }}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Учасник A</Text>
      <Text>Ім'я, прізвище:</Text>
      <TextInput style={styles.input} onChangeText={(text) => setData({ ...data, name: text })} />

      <Text>Дата народженння:</Text>
      <TextInput style={styles.input} onChangeText={(text) => setData({ ...data, birdthDate: text })} />

      <Text>Модель, номер авто:</Text>
      <TextInput style={styles.input} onChangeText={(text) => setData({ ...data, carModel: text })} />

      <Text>Телефон:</Text>
      <TextInput style={styles.input} keyboardType="phone-pad" onChangeText={(text) => setData({ ...data, phone: text })} />

      <Button title="Далі" onPress={() => router.push('/(tabs)/ParticipantB')} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 8, marginVertical: 10, borderRadius: 5 }
});

