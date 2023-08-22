import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Card from '../components/Card'; 
import { styles } from '../../assets/styles/appStyles';
import { ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Botón</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        
        <Card  
        title="Piscina"
        availability="Disponible"
        image={require('../../assets/pool.png')} /> 
        
      </ScrollView>
    </View>
  );
};



export default HomeScreen;


  
