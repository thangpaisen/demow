import { Texts } from '@/Constants'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider } from 'react-native-elements'

import Questions from '../questions1.json'

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const CongratScreen = ({ navigation }) => {
  const score = randomIntFromInterval(6, 10)

  const widthAndHeight = 150
  const series = [score, Questions.questions.length - score]
  const sliceColor = ['#00FF00']

  return (
    <View style={styles.cogratsScreen}>
      <Text style={styles.congratsText}>Xin chúc mừng Bạn đã ghi được {score} điểm</Text>
      <Text style={styles.scoreStyle}>{score}</Text>

      <TouchableOpacity
        style={{
          padding: 20,
          paddingVertical: 10,
          backgroundColor: '#8330ff',
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate(Texts.splash)
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          Quay lại
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CongratScreen

const styles = StyleSheet.create({
  cogratsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsText: {
    fontSize: 26,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  scoreStyle: {
    fontSize: 90,
    marginVertical: 30,
    color: 'red',
    fontWeight: '800',
  },
})
