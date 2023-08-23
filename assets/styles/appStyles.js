import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const getResponsiveFontSize = (percentage) => {
  return windowWidth * percentage;
};
export const darkColors = {
  background: '#49413F',
  text: '#FFFFFF',       
  buttonBackground: '#008000', 
};

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:  darkColors.background,
    },
    header: {
      flexDirection: 'row',
      marginTop: "10%",
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
      backgroundColor: 'black',
      width: '100%',
    },
    logo: {
      width: 50,
      height:50,
      borderRadius:25,
      resizeMode:'contain'
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
        height: 250,
        margin: 8,
        backgroundColor: "#171515",
        borderRadius: 8,
        padding:5
        
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
        color:darkColors.text,
    },
    cardAvailability: {
      color:'green',
      textAlign: 'center'        
    },
    modalContainer: {
      flex: 1,
      backgroundColor: darkColors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: darkColors.buttonBackground,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 10,
      borderRadius: 8
    },
    buttonText: {
      color: darkColors.text,
      fontWeight: 'bold',
      textAlign:"center"
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
  
