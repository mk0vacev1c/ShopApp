import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ProductCard from '../components/ProductCard'; 
import { Product } from '../types'; 
import { RootStackParamList } from '../navigation'; 

const { width } = Dimensions.get('window');

const ProductListScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default ProductListScreen;
