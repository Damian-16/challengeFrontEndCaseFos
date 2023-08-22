import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "../../assets/styles/appStyles";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import ReservationModal from "./ReservationModal";
import ReservationsList from "./ReservationList";
import { reservationsData } from "../constants/data";

const Card = ({ image, title, availability,dateTime }) => {
  const avaiable = availability === "Disponible";
  const [isReserved, setReserved] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState();


  const handleReserve = () => {
    setModalVisible(true);
  };

  const handleConfirmReservation = () => {
    
    setReserved(true); 
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text
        style={{
          ...styles.cardAvailability,
          color: avaiable ? "red" : "green",
        }}
      >
        {availability}
      </Text>
      {avaiable && (
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() => handleReserve()}
        >
          <Text style={styles.reserveButtonText}>Reservar</Text>
        </TouchableOpacity>
      )}
      <ReservationsList data={reservationsData} />
      <ReservationModal
        visible={modalVisible}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onConfirm={handleConfirmReservation}
        onCancel={handleCancel}
      />
      
    </View>
  );
};

export default Card;
