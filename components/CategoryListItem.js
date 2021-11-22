import React, {Component} from 'react';
// import {React, Component } from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import SkillImage from '../assets/girl.png';

export default function CategoryListItem(props) {
  const {category} = props;
  return (
    <View>
      <View
        style={{
          backgroundColor: 'blue',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 400,
        }}>
        <Text>{category.name}</Text>
        <Image
          source={require('../assets/girl.png')}
          style={{width: 40, height: 40}}
        />
      </View>
    </View>
  );
}

// function Button() {
//     return (
// 		<Text>BUTTON</Text>
// 	)
// }

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },

  category: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

// export default CategoryListItem; // Don’t forget to use export default!
