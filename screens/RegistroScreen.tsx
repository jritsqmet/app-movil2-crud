import { StyleSheet, Text, TextInput, View, Button, Image, Alert } from 'react-native'
import React, { useState } from 'react'

import { ref, set } from "firebase/database";
import { db } from '../config/Config';


export default function RegistroScreen() {

  const [correo, setCorreo] = useState('')
  const [pass, setPass] = useState('')
  const [edad, setEdad] = useState('')
  const [nick, setNick] = useState('')

  function guardar(nick : string, edad: string, correo: string, password: string) {
    //const db = getDatabase();
    set(ref(db, 'usuarios/' + nick), {
      nick: nick,
      edad: edad,
      correo: correo,
      pass: password
    });

    Alert.alert("Mensaje", "Registro exitoso")
    limpiar()
  }

  function limpiar(){
    setCorreo('');
    setPass('');
    setEdad('');
    setNick('')
  }


  return (
    <View style={styles.container}>

      <Image 
        source ={{uri:"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}}
        style={styles.img}
      />
      
      <Text style={{fontSize:45, color:"#fff"}}>Registro</Text>
      <TextInput 
       placeholder='Ingrese correo'
       style={styles.input}
       placeholderTextColor={'#ffe'}
       keyboardType='email-address'
       onChangeText={ (texto)=> setCorreo(texto) }
       value={correo}
      />

      <TextInput 
        placeholder='Ingrese Password'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        secureTextEntry
        onChangeText={ (texto)=> setPass(texto)} 
        value={pass}
      />

      <TextInput 
        placeholder='Ingrese Nick'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        onChangeText={(texto)=> setNick(texto)}
        value={nick }
      />

      <TextInput 
      placeholder='Ingrese edad'
      style={styles.input}
      placeholderTextColor={'#ffe'}
      keyboardType='numeric'
      onChangeText={ (texto)=> setEdad( texto)}
      value={edad}
      />

      <Button 
        title='Guardar'
        onPress={()=> guardar(nick, edad, correo, pass) } 
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#666',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input:{
      backgroundColor:"#B2BEB5",
      height:60,
      fontSize:25,
      width: '80%',
      marginTop:10,
      borderRadius:60,
      paddingHorizontal:30,
      color: '#444857'
    },
    img:{
      width: 100,
      height: 100
    }
})