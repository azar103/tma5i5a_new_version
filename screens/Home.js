import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import CategoryItem from '../components/CategoryItem';
import RecipeItem from '../components/RecipeItem';
import {recipes, categories} from '../Helpers/data';
import {filterByCategory} from '../Helpers/functions';

const Home = () => {
  const cookies = filterByCategory(recipes, 3);
  const smoothies = filterByCategory(recipes, 4);
  const mexicanFood = filterByCategory(recipes, 1);
  const italianFood = filterByCategory(recipes, 2);
  const pizza = filterByCategory(recipes, 0);
  return (
    <ScrollView style={styles.main_container}>
      <View style={styles.slide}>
        <Image source={{uri: recipes[0]['photo_url']}} style={styles.image} />
        <Text style={styles.slide_title_text}>{recipes[0]['title']}</Text>
      </View>
      <View style={styles.body_container}>
        <Text style={styles.label_list_text}>Populaires</Text>
        <FlatList
          keyExtractor={(item) => item.recipeId.toString()}
          data={recipes}
          horizontal
          renderItem={({item}) => (
            <RecipeItem url={item.photo_url} title={item.title} />
          )}
        />
        <Text style={styles.label_list_text}>Catégories</Text>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={categories}
          horizontal
          renderItem={({item}) => (
            <CategoryItem url={item.photo_url} title={item.name} />
          )}
        />
        <View style={styles.recipe_by_category_container}>
          <Text style={styles.label_list_text}>Cookies</Text>
          <FlatList
            keyExtractor={(item) => item.recipeId.toString()}
            data={cookies}
            horizontal
            renderItem={({item}) => (
              <RecipeItem url={item.photo_url} title={item.title} />
            )}
          />
        </View>
        <View style={styles.recipe_by_category_container}>
          <Text style={styles.label_list_text}>Smoothies</Text>
          <FlatList
            keyExtractor={(item) => item.recipeId.toString()}
            data={smoothies}
            horizontal
            renderItem={({item}) => (
              <RecipeItem url={item.photo_url} title={item.title} />
            )}
          />
        </View>
        <View style={styles.recipe_by_category_container}>
          <Text style={styles.label_list_text}>Mexican Food</Text>
          <FlatList
            keyExtractor={(item) => item.recipeId.toString()}
            data={mexicanFood}
            horizontal
            renderItem={({item}) => (
              <RecipeItem url={item.photo_url} title={item.title} />
            )}
          />
        </View>

        <View style={styles.recipe_by_category_container}>
          <Text style={styles.label_list_text}>Italian Food</Text>
          <FlatList
            keyExtractor={(item) => item.recipeId.toString()}
            data={italianFood}
            horizontal
            renderItem={({item}) => (
              <RecipeItem url={item.photo_url} title={item.title} />
            )}
          />
        </View>
        <View style={styles.recipe_by_category_container}>
          <Text style={styles.label_list_text}>Pizza</Text>
          <FlatList
            keyExtractor={(item) => item.recipeId.toString()}
            data={pizza}
            horizontal
            renderItem={({item}) => (
              <RecipeItem url={item.photo_url} title={item.title} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  slide: {
    height: 200,
  },
  image: {
    height: '100%',
    position: 'relative',
  },
  slide_title_text: {
    position: 'absolute',
    color: '#fff',
    top: 160,
    left: 120,
    fontSize: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    zIndex: 1,
  },
  body_container: {
    marginHorizontal: 20,
  },
  label_list_text: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 22,
  },
  recipe_by_category_container: {
    marginTop: -25,
  },
});
