import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import useStore from '../zustand/store';
import Box from '../components/Box';

const HistorialScreen = () => {
  const user = useStore(state => state.user);
  const facilities = useStore(state => state.facilities);
  const [item, setItem] = useState(facilities)
  
  // Filtra las instalaciones reservadas por el usuario
  const myReservations = item.flatMap(facility =>
    facility.reservation.filter(reservation => reservation.name === user.name)
  );
  useEffect(() => {
    setItem(facilities)
    
  }, [facilities])
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Mis Reservas</Text>
      {myReservations.map((reservation, index) => {
        console.log("🚀 ~ file: HistorialScreen.js:18 ~ {myReservations.map ~ reservation:", reservation)
        const facility = item.find(facility =>
          facility.title === reservation.title
        );

        if (facility) {
          return (
            <Box
              key={index}
              title={reservation.title}
              dateTime={reservation.dateTime}
              image={facility.image}
            
            />
          );
        }

        return null;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
});

export default HistorialScreen;
