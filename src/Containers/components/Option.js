import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Questions from '../../questions1.json'

const Option = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.qnIndex + 1 >= Questions.questions.length) {
          props.navigation.replace('CongratsScreen')
        } else {
          props.navigation.navigate('Quiz', {
            index: props.qnIndex + 1,
          })
        }
      }}
    >
      <View style={[styles.Option]}>
        <Text style={styles.OptionText}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Option

const styles = StyleSheet.create({
  Option: {
    borderColor: '#8330ff',
    borderWidth: 3,
    margin: 40,
    marginBottom: 0,
    borderRadius: 25,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDECEC',
  },
  OptionText: {
    fontSize: 30,
  },
})
