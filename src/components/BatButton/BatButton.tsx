import React, { useState } from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyle';
import { BatInput } from '../BatInput/BatInput';
import generatePass from '../../services/passwService';



export function BatButton() {
  const [pass, setPass]=useState('')
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
        <Pressable onPress={() => console.log('teclei')}>
          <Text style={styles.copyStyle}>
            📋Copy
          </Text>
        </Pressable>
      </View>
    </>
  );
}