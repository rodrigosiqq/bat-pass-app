import React from 'react';
import { View, Text, Image } from 'react-native';
import batlogo from '../../../assets/pictures/bat.png'

import { styles } from './BatlogoStyle';

export function Batlogo() {
  return (
    <View>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image 
        source={batlogo} 
        style={{
            height:150,
            resizeMode:'contain'
        }}
        />
    </View>
  );
}