import React from "react";
import{View,Text,SafeAreaView,Button, StyleSheet} from "react-native"


export function Bar(){
  return(
  <SafeAreaView>
    <View>
      <Text>hello react from gagan</Text>
      <View style={Styles.contnaier}>
      <Text style={Styles.whiteText}>hello</Text>
      </View>
    </View>
    <Button title="gagan">
       </Button>
  </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  contnaier:{
    width:100,
    height:100,
    backgroundColor:"#000000",
    

  },
  whiteText:
  {
    color:'#ffffff',
    flex:1,
    justifyContent:"center"
  }
})