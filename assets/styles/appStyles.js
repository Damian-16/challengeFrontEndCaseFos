import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const getResponsiveFontSize = (percentage) => {
  return windowWidth * percentage;
};

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
      flexGrow: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    },
    card: {
        width: "45%",
        height: 150,
        margin: 8,
        backgroundColor: "#f0f0f0",
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
    cardImage: {
        
        width: '100%',
        height:'45%'
    },
    cardTitle: {
        textAlign: 'center',
    },
    cardAvailability: {
      color:'green',
      textAlign: 'center'        
    },
    box: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    boxImage: {
      width: 60,
      height: 60,
      resizeMode: 'cover',
      marginRight: 10,
    },
    boxTitle: {
      fontSize: getResponsiveFontSize(0.03),
      margin:10,
      fontWeight: 'bold',
    },
    boxDateTime: {
      margin: '1%',
    },


  });
  
