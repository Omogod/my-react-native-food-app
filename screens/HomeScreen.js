import React, { Component, useLayoutEffect, useState, useEffect } from "react";
import { Text, View, SafeAreaView, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  ArrowDownCircleIcon,
  AdjustmentsVerticalIcon
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
  sanityClient.fetch(
    `*[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[] ->
      }
    }`).then((data) => {
      setFeaturedCategories(data)
    })

  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">

        {/* header */}
        <View className="flex-row pb-2 pt-8 items-center mx-4 space-x-2" >
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
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
              <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3" >
              <ArrowDownCircleIcon color="grey" size={30}/>
              <TextInput
                placeholder="Search for a restaurant"
                keyboardType="default"
                />
              </View>

              <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>


        {/* body */}
        <ScrollView className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        >
            {/* categories */}
            <Categories />

            {/* featured */}

            {featuredCategories?.map((category) => (
                          <FeaturedRow
                          key={category._id}
                          id={category._id}
                          title={category.name}
                          description={category.short_description}
                          />
            ))}

        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
