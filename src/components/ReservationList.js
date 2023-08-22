import React from 'react';
import { FlatList, View, Text } from 'react-native';

const ReservationsList = ({ data }) => {
  const renderItem = () => (
    <View>
        <Text>Cantidad {data.length}</Text>
      {/* <Text>Apartamento: {item.apartment}</Text>
      <Text>Lugar: {item.title}</Text>
      <Text>Fecha: {item.date.toLocaleString()}</Text>
      <Text>Estado: {item.status}</Text> */}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()} // Usar un índice como clave
    />
  );
};

export default ReservationsList;
