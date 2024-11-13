import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PantallaAjustes() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Ajustes</Text>

      {/* Account Section */}
      <Text style={styles.sectionTitle}>Cuenta</Text>
      <View style={styles.section}>
        <SettingOption icon="person-outline" title="Editar perfil" />
        <SettingOption icon="shield-checkmark-outline" title="Seguridad" />
        <SettingOption icon="notifications-outline" title="Notificaciones" />
        <SettingOption icon="lock-closed-outline" title="Privacidad" />
        <SettingOption icon="log-out-outline" title="Cerrar sesión" />
      </View>

      {/* Support & About Section */}
      <Text style={styles.sectionTitle}>Soporte y Suscripción</Text>
      <View style={styles.section}>
        <SettingOption icon="card-outline" title="Mi suscripción" />
        <SettingOption icon="help-circle-outline" title="Ayuda y soporte" />
        <SettingOption icon="information-circle-outline" title="Términos y condiciones" />
      </View>
    </ScrollView>
  );
}

type SettingOptionProps = {
  icon: string;
  title: string;
};

const SettingOption = ({ icon, title }: SettingOptionProps) => (
  <TouchableOpacity style={styles.option}>
    <Ionicons name={icon} size={24} color="#333" />
    <Text style={styles.optionText}>{title}</Text>
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
  optionText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
});

