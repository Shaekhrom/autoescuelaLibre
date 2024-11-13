import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();

  const testsData = {
    hechos: 50,
    aprobados: 40,
    suspendidos: 10,
  };

  const [hechos, setHechos] = useState(new Animated.Value(0));
  const [aprobados, setAprobados] = useState(new Animated.Value(0));
  const [suspendidos, setSuspendidos] = useState(new Animated.Value(0));
  const [probabilidad, setProbabilidad] = useState("");

  useEffect(() => {
    Animated.timing(hechos, { toValue: testsData.hechos, duration: 1000, useNativeDriver: false }).start();
    Animated.timing(aprobados, { toValue: testsData.aprobados, duration: 1000, useNativeDriver: false }).start();
    Animated.timing(suspendidos, { toValue: testsData.suspendidos, duration: 1000, useNativeDriver: false }).start();

    const aprobadosPorcentaje = (testsData.aprobados / testsData.hechos) * 100;
    if (aprobadosPorcentaje > 90) setProbabilidad("😊 Muy alta, ¡completamente preparado!");
    else if (aprobadosPorcentaje > 80) setProbabilidad("👍 Alta, bien preparado");
    else if (aprobadosPorcentaje > 70) setProbabilidad("😕 Intermedia, preparación justa");
    else if (aprobadosPorcentaje > 50) setProbabilidad("⚠️ Baja, estudia más");
    else setProbabilidad("🚫 Muy baja, ¡ni se te ocurra presentarte aún!");
  }, []);

  const animatedValueToNumber = (animatedValue: Animated.Value): number => {
    const [number, setNumber] = useState(0);
    animatedValue.addListener((value) => setNumber(Math.floor(value.value)));
    return number;
  };

  return (
    <LinearGradient colors={['#6A11CB', '#2575FC']} style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>¡Bienvenido, {"\n"}userName!</Text>
      </View>

      <View style={styles.statsContainer}>
        <Text style={[styles.statText, styles.hechos]}>
          📋 Tests completados: <Text style={styles.number}>{animatedValueToNumber(hechos)}</Text>
        </Text>
        <Text style={[styles.statText, styles.aprobados]}>
          ✅ Tests aprobados: <Text style={styles.number}>{animatedValueToNumber(aprobados)}</Text>
        </Text>
        <Text style={[styles.statText, styles.suspendidos]}>
          ❌ Tests suspendidos: <Text style={styles.number}>{animatedValueToNumber(suspendidos)}</Text>
        </Text>
        <Text style={styles.probabilidadText}>Probabilidad de aprobar: {"\n"}{probabilidad}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 70,
  },
  appName: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  statsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  statText: {
    fontSize: 24,
    marginVertical: 8,
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowColor: '#000000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  hechos: {
    color: '#FFD700', 
  },
  aprobados: {
    color: '#00FF7F', 
  },
  suspendidos: {
    color: '#FF6347', 
  },
  number: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  probabilidadText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    padding: 10,
    borderRadius: 10,
    textShadowColor: '#000000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
