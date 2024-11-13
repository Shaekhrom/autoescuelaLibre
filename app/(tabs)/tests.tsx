import { Image, Platform, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Tests</Text>

      {/* Permiso B */}
      <View style={styles.section}>
        <SettingOption icon="arrow-forward-circle-outline" title="Permiso B" text="(Común / Turismo) 🚘" />
      </View>

      {/* Permiso A1/A2 */}
      <View style={styles.section}>
        <SettingOption icon="arrow-forward-circle-outline" title="Permiso A1/A2" text="(Motocicletas) 🏍️" />
      </View>

      {/* Permiso AM */}
      <View style={styles.section}>
        <SettingOption icon="arrow-forward-circle-outline" title="Permiso AM" text="(Ciclomotores) 🛵" />
      </View>

      {/* Permiso C1/C */}
      <View style={styles.section}>
        <SettingOption icon="arrow-forward-circle-outline" title="Permiso C1/C" text="(Camión) 🚚" />
      </View>

      {/* Permiso D1/D */}
      <View style={styles.section}>
        <SettingOption icon="arrow-forward-circle-outline" title="Permiso D1/D" text="(Autobús) 🚌" />
      </View>

      {/* Permiso E */}
      <View style={styles.section}>
        <SettingOption icon="arrow-forward-circle-outline" title="Permiso E" text="(Remolque) 🚛" />
      </View>
    </ScrollView>
  );
}

type SettingOptionProps = {
  icon: string;
  title: string;
  text: string;
};

const SettingOption = ({ icon, title, text }: SettingOptionProps) => (
  <TouchableOpacity style={styles.option}>
    <Ionicons name={icon} size={24} color="#333" />
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  textContainer: {
    marginLeft: 12,
  },
  optionTitle: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});
