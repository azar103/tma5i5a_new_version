import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const RecipeItem = ({url, title}) => {
  return (
    <View style={styles.item_style}>
      <Image source={{uri: url}} style={styles.item_img} />
      <Text style={styles.item_title}>{title}</Text>
    </View>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  item_style: {
    height: 190,
    width: 200,
    marginRight: 10,
  },
  item_img: {
    width: '100%',
    height: 130,
    borderRadius: 12,
  },
  item_title: {
    marginTop: 20,
  },
});
