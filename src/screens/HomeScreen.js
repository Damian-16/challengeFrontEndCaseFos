import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Card from "../components/Card";
import { styles } from "../../assets/styles/appStyles";
import { ScrollView } from "react-native";
import useStore from "../zustand/store";
import { facilitiesData } from "../constants/data";


const HomeScreen = () => {
  const facilities = useStore((state) => state.facilities);

  useEffect(() => {
    useStore.setState({ facilities: facilitiesData });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/icon.png")} style={styles.logo} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Botón</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {facilities.map((facility, index) => (
          <Card
            key={index}
            title={facility.title}
            availability={facility.availability}
            image={facility.image}
            reservation={facility.reservation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
