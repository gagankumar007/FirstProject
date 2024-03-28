import React, { cloneElement } from "react";
import{View,Text,SafeAreaView,Button, StyleSheet, ScrollView, Image} from "react-native"


export function Bar(){
  return(

    <View>
      <Text style={Styles.cont}>hello react from gagan</Text>
      <ScrollView horizontal={true}>
      <View   style={Styles.contnaier}>
      <Text style={Styles.whiteText}>hello</Text>
      </View>
      <View style={Styles.contnaier}>
      <Text style={Styles.whiteText}>hello</Text>
      </View>
      <View style={Styles.contnaier}>
      <Text style={Styles.whiteText}>hello</Text>
      </View>
      <View style={Styles.contnaier}>
      <Text style={Styles.whiteText}>hello</Text>
      </View>
      <View style={Styles.contnaier}>
      <Text style={Styles.whiteText}>hello</Text>
      </View>
       <View style={Styles.contnaier}>
      <Text style={Styles.whiteText}>hello</Text>
      </View>
      <View style={Styles.contnaier}>
      <Text style={Styles.whiteText}>hello</Text>
      </View>
      <View style={Styles.contnaier}>
      <Text style={Styles.whiteText}>hello</Text>
      </View>
      </ScrollView>
    </View>
  
  
  )
}

const Styles = StyleSheet.create({
  contnaier:{
    alignItems:"center",
    justifyContent:"center",
    width:100,
    height:100,
    backgroundColor:"#000000",
    margin:8,
    padding:10,
    elevation:80
    

  },
  whiteText:
  {
    color:'#ffffff',
  },
  cont:{
    fontSize:30
   
  }
})