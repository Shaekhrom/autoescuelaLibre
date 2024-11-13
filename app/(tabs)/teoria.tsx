import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PantallaTeoria() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Teoría</Text>

      {/* Contenedor para los bloques */}
      <View style={styles.gridContainer}>
        <SettingOption title="Permiso B" text="(Común / Turismo)" />
        <SettingOption title="Permiso A1/A2" text="(Motocicletas)" />
        <SettingOption title="Permiso AM" text="(Ciclomotores)" />
        <SettingOption title="Permiso C1/C" text="(Camión)" />
        <SettingOption title="Permiso D1/D" text="(Autobús)" />
        <SettingOption title="Permiso E" text="(Remolque)" />
      </View>
    </ScrollView>
  );
}

type SettingOptionProps = {
  title: string;
  text: string;
};

const SettingOption = ({ title, text }: SettingOptionProps) => (
  <TouchableOpacity style={styles.option}>
    <View style={styles.textContainer}>
      <Text style={styles.optionTitle}>{title}</Text>
      <Text style={styles.optionText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  option: {
    width: (Dimensions.get('window').width - 48) * 0.5, 
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    borderRadius: 8,
    paddingVertical:50, 
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  optionTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    flexWrap: 'wrap', 
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap', 
  },
});
