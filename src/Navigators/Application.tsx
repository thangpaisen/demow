import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { SplashView, LoginView, DetailScreen, HomeScreen, Trang1, Trang2 } from '@/Navigators/Stack'
import { navigationRef } from './utils'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Texts } from '@/Constants'
import OK from '../../OK'
import quizScreen from '@/Containers/Quiz'
import CongratScreen from '../Containers/congratScreen'

const Stack = createSharedElementStackNavigator()

const ApplicationNavigator = () => {
  const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ({ current: { progress } }: any) => {
      return {
        cardStyle: {
          opacity: progress,
        },
      }
    },
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <StatusBar barStyle={'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Texts.splash}>
          <Stack.Screen name={Texts.splash} component={SplashView} />
          <Stack.Screen name={Texts.login} component={LoginView} />
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Trang1'} component={Trang1} />
          <Stack.Screen name={'Trang2'} component={Trang2} />
          <Stack.Screen name={'OK'} component={OK} />
          <Stack.Screen name={'Quiz'} component={quizScreen} />
          <Stack.Screen name={'CongratsScreen'} component={CongratScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}

export default ApplicationNavigator
