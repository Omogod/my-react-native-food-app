import React, { Component, useLayoutEffect } from "react";
import { Text, View, SafeAreaView, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  ArrowDownCircleIcon,
  AdjustmentsVerticalIcon
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-800">
        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4 " >
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h7- w-7 bg-gray-300 p-4 rounded-full"
          />
          
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location!
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
              <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3" >
              <ArrowDownCircleIcon color="grey" size={30}/>
              <TextInput
                placeholder="Search for a restaurant"
                keyboardType="default"
                />
              </View>

              <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
