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

  const handleReserve = () => {
    setModalVisible(true);
  };

  const handleConfirmReservation = (newReservation) => {
    confirmReservation(newReservation); // Agrega la reserva al estado

    setModalVisible(false);
    Alert.alert("Reservado", "El lugar ha sido Reservado con éxito", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
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
      <Text>Cantidad de Reservas:{reservation.length}</Text>
      <ReservationModal
        visible={modalVisible}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onConfirm={(date) =>
          handleConfirmReservation({
            name: "nombre",
            apartment: "apartamento123",
            title: title,
            date: date,
          })
        }
        onCancel={handleCancel}
      />
    </View>
  );
};

export default Card;
