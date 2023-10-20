import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Card from '../component/Card'
import Colors from '../constants/colors'
import Input from '../component//Input'
import NumberContainer from '../component/NumberContainer'

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Số không hợp lệ!', 'Số phải là một số từ 1 đến 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ])
      return
    }
    setConfirmed(true)
    setEnteredValue('')
    setSelectedNumber(chosenNumber)
    Keyboard.dismiss()
  }

  let confirmedOutput

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Bạn đã chọn</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='Bắt đầu game' onPress={() => props.onStartGame(selectedNumber)} />
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Bắt đầu game mới!</Text>
        <Card style={styles.inputContainer}>
          <Text>Nhập con số của bạn</Text>

          <TextInput
            style={styles.input}
            onChangeText={numberInputHandler}
            value={enteredValue}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            placeholder='nhập số của bạn'
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={resetInputHandler}
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 16,
                    color: 'white',
                  }}
                >
                  Xoá
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={confirmInputHandler}
                style={{
                  backgroundColor: Colors.primary,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 16,
                    color: 'white',
                  }}
                >
                  Xác nhận
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
})

export default StartGameScreen
