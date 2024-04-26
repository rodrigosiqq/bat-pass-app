import React, { useState } from "react"
import { View} from "react-native"
import Style from './Style'
import { StatusBar } from "expo-status-bar";
import { Batlogo } from "../../components/Batlogo/Batlogo";
import { BatInput } from "../../components/BatInput/BatInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
    const [pass, setPass]=useState('')
    return (
        <View style={Style.appContainer}>
            <View style={Style.LogoContainer}>
                <Batlogo />
            </View>
            <StatusBar style="light" />
            <View style={Style.inputContainer}>
                <BatInput pass= />
            </View>
            <View>
                <BatButton />
            </View>
        </View>

    )
}

