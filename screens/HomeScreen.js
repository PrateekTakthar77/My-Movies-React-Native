import { View, Text, Platform, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../theme/index";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import TrendingMovies from "../components/trendingMovies";
import { useState } from "react";
const ios = Platform.OS == 'ios';
export default function HomeScreen() {
    const [trending, setTrending] = useState([1, 2, 3])
    return (
        <View ClassName="flex-1 bg-neutral-800">
            {/* search bar and logo */}
            <SafeAreaView ClassName={ios ? "-mb-2" : 'mb-3'}>
                <StatusBar style="light" />
                <View ClassName="flex-row justify-between iteams-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={20} color='white' />
                    <Text ClassName="texxt-white text-3xl font-bold">
                        <Text style={styles.text}>M</Text>OVIES
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
                {/* trending movies carousel */}
                <TrendingMovies data={trending} />
            </ScrollView>
        </View>
    )
}