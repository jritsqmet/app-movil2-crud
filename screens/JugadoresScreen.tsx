import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, onValue, update, remove } from "firebase/database";

import { db } from '../config/Config';


export default function JugadoresScreen() {

    const [lista, setLista] = useState([])

    const [nick, setnick] = useState('')
    const [correo, setcorreo] = useState("")

    ////LEER /////
    function leer() {
        //const db = getDatabase();
        const starCountRef = ref(db, 'usuarios/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            //updateStarCount(postElement, data);
            console.log(data);

            let dataArray: any = Object.keys(data).map( key =>({
                key, ...data[key]
            }))

            setLista(dataArray)
            console.log(lista);           
        });
    }



    //////ACTUALIZAR///
    function actualizar( id: any){
        update(ref(db, 'usuarios/'+ id),{
            nick: nick,
            correo: correo,
            pass: "nuevo",
            edad: "nuevo"
        })
    }

    ////ELIMINAR
    function eliminar(){
        remove(ref(db, 'usuarios/'+ nick))
    }


    type Usuario={
        nick: string,
        correo: string
    }


    return (
        <View>
            <Text>JugadoresScreen</Text>
            <Button title='Cargar' onPress={() => leer()}/>
            <TextInput 
                placeholder='nick'
                onChangeText={(texto)=> setnick(texto)}
            />
            <TextInput 
                placeholder='correo'
                onChangeText={(texto)=> setcorreo(texto)}
            />
            <TextInput 
                placeholder='password'
            />
             <TextInput 
                placeholder='edad'
            />
            <Button title='Editar' color={'green'} onPress={()=> actualizar(nick)}/>
            <TextInput
                placeholder='Ingrese nick a eliminar'
                onChangeText={(texto)=> setnick(texto)}
            />
            <Button title='Eliminar' color={'red'}  onPress={()=>eliminar()}/>

            <FlatList 
                data={lista}
                renderItem={ ( {item}: {item:Usuario} ) =>(
                   <View>
                        <Text>Nick: {item.nick}</Text>
                        <Text>Email:{item.correo}</Text>
                   </View>
                ) }
            />
        </View>
    )
}

const styles = StyleSheet.create({})