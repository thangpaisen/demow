import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Trò chơi kết thúc rồi!</Text>
      <Text>Số vòng: {props.roundsNumber}</Text>
      <Text>Số chọn là: {props.userNumber}</Text>
      <Button title='Trò chơi mới' onPress={props.onRestart} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default GameOverScreen
