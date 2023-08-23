import { SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { styles } from '../../assets/styles/appStyles'

const Header = () => {
  return (
    <View style={styles.header}>
       
        <TouchableOpacity style={{margin:10}}>
        <SimpleLineIcons name="menu" size={24} color="gray" />
        </TouchableOpacity>
        <Image source={require("../../assets/icon.png")} style={styles.logo} /> 
      </View>
  )
}

export default Header