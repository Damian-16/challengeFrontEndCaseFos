import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { styles } from "../../assets/styles/appStyles";
import { TouchableOpacity } from "react-native";
import ReservationModal from "./ReservationModal";
import useStore from "../zustand/store";

const Card = ({ image, title, availability, reservation }) => {
  const avaiable = availability === "Disponible";
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const confirmReservation = useStore((state) => state.confirmReservation);
  const updateReservationDateTime = useStore(
    (state) => state.updateReservationDateTime
  );
  const user = useStore((state) => state.user);

  const handleReserve = () => {
    setModalVisible(true);
  };

  const handleConfirmReservation = (newReservation) => {
    console.log(
      "🚀 ~ file: Card.js:20 ~ handleConfirmReservation ~ newReservation:",
      newReservation
    );
    confirmReservation(newReservation); // Agrega la reserva al estado
    updateReservationDateTime(newReservation.dateTime);

    setModalVisible(false);
    Alert.alert("Reservado", "El lugar ha sido Reservado con éxito", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleReservationConfirmation = (date) => {
    const newReservation = {
      name: user.name,
      apartment: user.apartment,
      title: title,
      dateTime: date,
    };

    handleConfirmReservation(newReservation);
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
      <Text>Cantidad de Reservas:{reservation.length}</Text>
      <ReservationModal
        visible={modalVisible}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onConfirm={(date) => handleReservationConfirmation(date)}
        onCancel={handleCancel}
      />
    </View>
  );
};

export default Card;
