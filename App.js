import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,} from "react-native";

import React, {useState} from "react";

import { AntDesign } from '@expo/vector-icons'; //importação do icone



function InstagramUserOne() { //função 
  const [liked, setLikeState] = useState(false);
  return(
    
    <view style={estilos.ajustes} >  

      <Image // imagem pequena
    
        style={estilos.imageSmall}
        source={require('./src/img/dog_one.jpg')}  />

      <Text style={estilos.texto_titulo}> @usuario01: </Text> 
      <Text style={estilos.texto_p}> Teste de Interface React </Text>
    
      <Image //imagem grande
    
        style={estilos.imageBig}
        source={require('./src/img/dog_one.jpg')}/>
        <Text> Dog de raça </Text>
      
      <View>
        <Text> <AntDesign name="circledown" size={24} color="green" /> </Text>
      </View>
      
      <View>
        
        <TouchableOpacity onPress={() => setLikeState (!liked)}>
          {liked && <AntDesign name="heart" size={24} color="red" />}
          {!liked && <AntDesign name="hearto" size={24} color="black" />}
        </TouchableOpacity>
    
      </View>
     
    </view>
  )}

function InstagramUserTwo() {
  const [liked, setLikeState] = useState(false);
  return(
    
    <view style={estilos.ajustes} >
      
       <Image
        
        style={estilos.imageSmall}
        source={require('./src/img/dog_tow.jpg')}/>
       
          <Text style={estilos.texto_titulo} >@usuario02: </Text>
          <Text style={estilos.texto_p} >Teste de Interface React</Text>

        <Image 
        
            style={estilos.imageBig}
            source={require('./src/img/dog_tow.jpg')}/>
            <Text> Dog de raça </Text>

        <View>
            <Text> <AntDesign name="circledown" size={24} color="green" /> </Text>
        </View>
      
      <View>
        <TouchableOpacity onPress={() => setLikeState (!liked)}>
            {liked &&   <AntDesign name="heart" size={24} color="red" />}
            {!liked && <AntDesign name="hearto" size={24} color="black" />}
        </TouchableOpacity>
      </View>
      
    </view>
  )}

function InstagramUserThree() {
  const [liked, setLikeState] = useState(false);
  return(
    
    <view style={estilos.ajustes} >
            
        <Image
        
            style={estilos.imageSmall}
            source={require('./src/img/dog_three.jpg')}/>
           
          <Text style={estilos.texto_titulo} >@usuario03: </Text>
          <Text style={estilos.texto_p} >Teste de Interface React</Text>
          
        <Image 
        
            style={estilos.imageBig}
            source={require('./src/img/dog_three.jpg')}/>  
             <Text> Dog de raça </Text>
         
        <View>
          <Text> <AntDesign name="circledown" size={24} color="green" /> </Text>
        </View>

      <View>
        <TouchableOpacity onPress={() => setLikeState (!liked)}>
          {liked &&   <AntDesign name="heart" size={24} color="red" />}
          {!liked && <AntDesign name="hearto" size={24} color="black" />}
        </TouchableOpacity>
      </View>  
    </view>
  )}

function InstagramUserFour() {
  const [liked, setLikeState] = useState(false);
  return(
    
    <view style={estilos.ajustes} >


        <Image
        
          style={estilos.imageSmall}
          source={require('./src/img/dog_four.jpg')} /> 
     
          <Text style={estilos.texto_titulo} >@usuario04: </Text>
          <Text style={estilos.texto_p} >Teste de Interface React</Text>
          
        
      
        <Image 
        
            style={estilos.imageBig}
            source={require('./src/img/dog_four.jpg')}/>
             <Text> Dog de raça </Text>

        <View>
          <Text> <AntDesign name="circledown" size={24} color="green" /> </Text>
        </View>
      

      <View>
        <TouchableOpacity onPress={() => setLikeState (!liked)}>
          {liked &&   <AntDesign name="heart" size={24} color="red" />}
          {!liked && <AntDesign name="hearto" size={24} color="black" />}
        </TouchableOpacity>
      </View>
      
    </view>
  )}


export default function App(){

  return(
    
    <SafeAreaView style={estilos.caixa} >

      <ScrollView>
       
        <InstagramUserOne/>
        <InstagramUserTwo/>
        <InstagramUserThree/>
        <InstagramUserFour/>

      </ScrollView>

    </SafeAreaView>   
  )}

const estilos = StyleSheet.create({
  
  caixa:{
  
    flex: 1,
    backgroundColor: 'darkorange',
    alignItems: 'center',
    justifyContent: 'center',   

  },

  ajustes:{
    
    flexDirection: 'row',
    alignItems: "center",
    padding: 15,
  
  },

  texto_titulo:{

    marginLeft: 30,
    marginTop: 30,
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',

  },

  texto_p:{
    
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',

  },

  imageSmall:{

    width: 30,
    height: 30,
    borderRadius: 20,
  
  },

  imageBig:{
    
    width: 300,
    height: 300,
    borderRadius: 20,
  
  },
})