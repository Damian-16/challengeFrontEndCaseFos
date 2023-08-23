import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, Modal, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from '../../assets/styles/appStyles';
import { TouchableOpacity } from 'react-native';

const ReservationModal = ({ visible, selectedDate, setSelectedDate, onConfirm, onCancel}) => {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDateSelected] = useState(!!selectedDate); 

  const toggleDateTimePicker = () => {
    setShowDateTimePicker(!showDateTimePicker);
  };

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
      setDateSelected(true); 
      toggleDateTimePicker();
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    
    setDateSelected(date)
    hideDatePicker();
  };

  const handleCancel = () => {
    onCancel();
    setDateSelected(false); 
  };
  const createReservation = ()=>{
    console.log({dateSelected})
    !dateSelected? Alert.alert("Error","Ingrese Fecha y Hora",[
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]): onConfirm(dateSelected)
    
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
      <View>
        {!dateSelected?null:<Text style={styles.buttonText}>La fecha seleccionada es {dateSelected.toLocaleString("en-US")}</Text>}
      <View>
      <TouchableOpacity style={styles.button}  onPress={showDatePicker} >
        <Text style={styles.buttonText}>Seleccione Fecha y Hora</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={createReservation}>
            <Text style={styles.buttonText}>Confirmar Reserva</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
      </View>
      </View>
    </Modal>
  );
};

export default ReservationModal;
