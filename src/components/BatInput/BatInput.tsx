import React from 'react';
import {TextInput } from 'react-native';

import { styles } from './BatInputStyle';


interface BatInputProps{
  pass:string
}

export function BatInput(props:BatInputProps) {
  return (
    
        <TextInput 
        multiline={true} 
        style={styles.inputer} 
        value={props.pass}
        placeholder='pass'/>
  );
}

