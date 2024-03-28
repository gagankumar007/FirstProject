import React from "react";
import{View,Text,SafeAreaView,Button, StyleSheet} from "react-native"
import { Bar } from "./Components/bar";


function AppPro(){
  return(
  <SafeAreaView>
    <View>
      <Text style={Styles.contnaier}>hello react from gagan</Text>
    </View>
    <Button title="gagan">
       </Button>
       <Bar/>
  </SafeAreaView>
  )
}

const Styles=StyleSheet.create(
  {
    contnaier:{
      fontSize:34
    }
  }
)
export default AppPro;