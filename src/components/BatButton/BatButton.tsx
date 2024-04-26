import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';



export function BatButton() {
  return (
    <View style={styles.container}>
        <Button
            title='Gerar'
            onPress={()=>console.log('olá')}
            accessibilityLabel='clique para gerar'
         />
         <Pressable onPress={()=>console.log('teclei')}>
            <Text style={styles.copyStyle}>
                📋Copy
            </Text>
         </Pressable>
    </View>
  );
}