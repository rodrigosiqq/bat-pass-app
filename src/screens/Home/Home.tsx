import React from "react"
import {Text, View} from "react-native"
import Style from './Style'
import { StatusBar } from "expo-status-bar";
import { Batlogo } from "../../components/Batlogo/Batlogo";

export default function Home(){
    return(
        <View style={Style.container}>
            <View>
                <Batlogo />
            </View>
           <StatusBar style="light" />
       </View>

    )
}

