import React, { useState } from "react"
import { View} from "react-native"
import Style from './Style'
import { StatusBar } from "expo-status-bar";
import { Batlogo } from "../../components/Batlogo/Batlogo";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {

    return (
        <View style={Style.appContainer}>
            <View style={Style.LogoContainer}>
                <Batlogo />
            </View>
            <StatusBar style="light" />
            <View>
                <BatButton />
            </View>
        </View>

    )
}

