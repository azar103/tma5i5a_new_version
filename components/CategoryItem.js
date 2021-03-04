import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CategoryItem = ({url, title}) => {
  return (
    <View style={styles.item_style}>
      <Image source={{uri: url}} style={styles.item_img} />
      <Text style={styles.item_title}>{title}</Text>
      <View style={styles.overlay}></View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  item_style: {
    height: 190,
    width: 300,
    marginRight: 10,
  },
  item_img: {
    width: '100%',
    height: 130,
    borderRadius: 12,
    position: 'relative',
  },
  item_title: {
    position: 'absolute',
    top: '30%',
    left: '35%',
    color: '#fff',
    fontWeight: 'bold',
    padding: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1,
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: -1,
      height: 5,
    },
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: 130,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
});
