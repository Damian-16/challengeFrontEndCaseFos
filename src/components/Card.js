import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "../../assets/styles/appStyles";

const Card = ({image,title,availability}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardAvailability}>{availability}</Text>
    </View>
  );
};



export default Card;
