import React, { useState } from 'react';
import { Button, View, Text, Pressable, Alert } from 'react-native';
import { styles } from './BatButtonStyle';
import { BatInput } from '../BatInput/BatInput';
import generatePass from '../../services/passwService';
import * as Clipboard from 'expo-clipboard';




export function BatButton() {
  const [pass, setPass]=useState('')


  function copyButton(){
    Clipboard.setStringAsync(pass)
    Alert.alert('copiado!')
  }




  function useBatInputG(){
    let generateToken = generatePass()
     setPass (generateToken)
  }
  return (
    <>
      <BatInput pass={pass} />
      <View style={styles.container}>
        <Button
          title='Gerar'
          onPress={useBatInputG}
          accessibilityLabel='clique para gerar'
        />
        <Pressable onPress={copyButton}>
        
          <Text style={styles.copyStyle}>
            📋Copy
          </Text>
        </Pressable>
      </View>
    </>
  );
}