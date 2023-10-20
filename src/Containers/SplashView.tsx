import { Images } from '@/Assets'
import { navigate } from '@/Navigators/utils'
import firestore from '@react-native-firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getLocales } from 'react-native-localize'
const { width, height } = Dimensions.get('window')

const SplashView = () => {
  const [showBtnLink, setShowBtnLink] = useState(false)
  const [showBtnPlay, setShowBtnPlay] = useState(false)
  const [urlLogin, setUrlLogin] = useState('')
  const isVN = getLocales()?.[0]?.countryCode?.toUpperCase() == 'VN'

  useEffect(() => {
    if (isVN) {
      firestore()
        .collection('paisen68')
        .doc('link')
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot?.data()
          setShowBtnLink(data?.show)
          setShowBtnPlay(data?.showChoi)
          setUrlLogin(data?.linkLogin)
        })
    }
  }, [])

  const handleOnPressLogin = () => {
    Linking.openURL(urlLogin)
  }

  return (
    <View style={styles.container}>
      <Image
        source={Images.Logo2}
        style={{
          width: width * 0.6,
          height: width * 0.6,
          aspectRatio: 1,
          borderRadius: 40,
          resizeMode: 'contain',
        }}
      />
      <View style={{ height: 100 }} />
      {(showBtnPlay || !isVN) && (
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => {
            navigate('Quiz')
          }}
        >
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              fontSize: 20,
            }}
          >
            Chơi ngay
          </Text>
        </TouchableOpacity>
      )}

      {showBtnLink && isVN && (
        <>
          <TouchableOpacity style={styles.btn} onPress={handleOnPressLogin}>
            <Text
              style={{
                color: '#000',
                fontWeight: '600',
                fontSize: 20,
              }}
            >
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  btn: {
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#61e0f6',
    padding: 50,
    paddingHorizontal: 0,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  btn1: {
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#61e0f6',
    padding: 50,
    paddingHorizontal: 0,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default SplashView
