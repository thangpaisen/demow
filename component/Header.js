import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})

export default Header
