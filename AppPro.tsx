import React from "react";
import{View,Text,SafeAreaView,Button, StyleSheet} from "react-native"
import { Bar } from "./Components/bar";
import FancyCard from "./Components/FancyCard";
import LoginPage from "./Components/LoginPage";


function AppPro(){
  return(
       <LoginPage/>
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