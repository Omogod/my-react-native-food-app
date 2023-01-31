import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        {/* restaurant cards */}
        <RestaurantCard 
        id = {123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yummy!"
        rating={4.5}
        genre="japanese"
        address="1234 test street"
        short_description="this is testing"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantCard 
        id = {123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yummy!"
        rating={4.5}
        genre="japanese"
        address="1234 test street"
        short_description="this is testing"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantCard 
        id = {123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yummy!"
        rating={4.5}
        genre="japanese"
        address="1234 test street"
        short_description="this is testing"
        dishes={[]}
        long={20}
        lat={0}
        />

      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
