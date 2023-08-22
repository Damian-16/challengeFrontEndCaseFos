import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    logo: {
      width: 100,
      height: 40,
    },
    button: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      width: '45%',
      height: 150,
      margin: 8,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
    largeCard: {
      width: '100%',
      height: 300,
    },
    smallCard: {
      width: '48%',
      height: 150,
    },
  });
  
