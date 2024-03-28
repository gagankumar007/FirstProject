import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Placel</Text>
      <View style={[styles.card,styles.elevatedCard]} >

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    card:{},
    elevatedCard:{}
})