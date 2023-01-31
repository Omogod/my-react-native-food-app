import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard';


const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      <CategoryCard  imgUrl="https://links.papareact.com/gn7" title="Cool "/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Great "/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Yummy"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Tasty"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Edible"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Crunchy"/>

    </ScrollView>
  )
}

export default Categories;