import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Card from '../components/Card'; 

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Botón</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        
        <Card />
        <Card/>
        <Card/>
       
      </View>
    </View>
  );
};



export default HomeScreen;


  
