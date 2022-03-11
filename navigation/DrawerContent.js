import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DrawerContent = ({props}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          marginTop: 100,
        }}
      >
        DrawerContent
      </Text>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({})