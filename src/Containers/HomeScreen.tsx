import { listColor } from '@/Constants/data'
import React, { useEffect, useState } from 'react'
import {
  Alert,
  Dimensions,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { navigate } from '@/Navigators/utils'
const { width, height } = Dimensions.get('window')

function shuffleArray(array: any) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}
var randomColor = () => {
  var data = Math.floor(Math.random() * 16777215).toString(16)
  while (data.length != 6) {
    var data = Math.floor(Math.random() * 16777215).toString(16)
  }
  return data
}

const newColor = () => {
  const color = randomColor()
  console.log(color)
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
    if (item == 5)
      return {
        id: item,
        color: `#${color}55`,
        isNo: true,
      }
    return {
      id: item,
      color: `#${color}`,
    }
  })
}

const HomeScreen = () => {
  const [data, setData] = useState(shuffleArray(listColor))
  const [point, setPoint] = useState(0)
  const [link, setLink] = useState(false)

  const handleOnPress = (item: any) => {
    if (item?.isNo) {
      setPoint((prev) => prev + 1)
      handleOnNext()
    } else {
      Alert.alert('You loss😭😭😭', `Point number: ${point}`)
      handleOnReset()
    }
  }

  const renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleOnPress(item)
        }}
        style={{
          backgroundColor: item.color,
          width: width / 4,

          aspectRatio: 1,
          borderRadius: width / 4,
          margin: 4,
        }}
      ></TouchableOpacity>
    )
  }

  const handleOnReset = () => {
    setData(shuffleArray(newColor()))
    setPoint(0)
  }

  const handleClickOnReset = () => {
    handleOnReset()
  }

  const handleClickOnNext = () => {
    handleOnNext()
  }

  const handleOnNext = () => {
    setData(shuffleArray(newColor()))
  }

  useEffect(() => {
    firestore()
      .collection('isLink')
      .doc('link')
      .onSnapshot((querySnapshot) => {
        const data: any = querySnapshot.data()
        setLink(data?.show || false)
      })
  }, [])

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'flex-end',
          alignSelf: 'stretch',
          paddingBottom: 20,
          marginTop: 10,
          marginRight: 20,
        }}
      >
        <Text
          style={{
            textAlign: 'right',
            fontWeight: '600',
            fontSize: 20,
          }}
        >
          Điểm :{' '}
          <Text
            style={{
              color: 'red',
            }}
          >
            {point}
          </Text>
        </Text>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            paddingHorizontal: 20,
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          Chọn màu khác biệt trong những màu còn lại
        </Text>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data}
          numColumns={3}
          renderItem={renderItem}
        />
        <View
          style={{
            margin: 40,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity style={styles.btn} onPress={handleClickOnReset}>
            <Text
              style={{
                color: '#000',
                fontWeight: '600',
                fontSize: 16,
              }}
            >
              Chơi lại
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleClickOnNext}>
            <Text
              style={{
                color: '#000',
                fontWeight: '600',
                fontSize: 16,
              }}
            >
              Đổi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: 100,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#61e0f6',
    padding: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
})
