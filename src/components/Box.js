import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from '../../assets/styles/appStyles';

const Box = ({ title, dateTime, image }) => {
  console.log("🚀 ~ file: Box.js:5 ~ Box ~ dateTime:", dateTime)
  return (
    <View style={styles.box}>
      <Image source={image} style={styles.boxImage} />
      <Text style={styles.boxTitle}>{title}</Text>
      <Text style={styles.boxDateTime}>{dateTime.toLocaleString("en-US")}</Text>
    </View>
  );
};



export default Box;