import {View, Text} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-3" edged={['top']}>
            <StatusBar style="dark"/>

            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{fontSize: hp(4.5)}} className="font-bold tracking-wider text-neutral-700">
                        READY TO
                    </Text>
                    <Text style={{fontSize: hp(4.5)}} className="font-bold tracking-wider text-rose-500">
                        WORKOUT
                    </Text>
                </View>
                <View className="flex justify-center items-center space-y-2">
                    <Image source={require('../assets/images/avatar.png')}
                    style={{height: hp(6), width: wp(6)}}
                    className="rounded-full"/>
                    <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300">
                        <Ionicons name="notifications" size={30} color="gray"/>
                    </View>
                </View>
            </View>

            {/* image slider  */}
            <View>
                <ImageSlider/>
            </View>
            <View className="flex-1">
                
            </View>
        </SafeAreaView>
    )
}