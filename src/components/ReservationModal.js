import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
    console.warn("A date has been picked: ", date);
    setDateSelected(date)
    hideDatePicker();
  };

  const handleCancel = () => {
    onCancel();
    setDateSelected(false); 
  };
  const createReservation = ()=>{
    console.log({dateSelected})
     onConfirm(dateSelected)
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View>
        {!dateSelected?<Text>Selecciona una fecha y hora para la reserva:</Text>:<Text>la date seleccionada es {dateSelected.toLocaleString("en-US")}</Text>}
      <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
        <Button title="Confirmar Reserva" onPress={createReservation} />
        <Button title="Cancelar" onPress={handleCancel} />
      </View>
    </Modal>
  );
};

export default ReservationModal;
