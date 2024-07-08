import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation'; 

const { width } = Dimensions.get('window');

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image_link }} style={styles.image} />
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: width / 2,
    height: width / 2,
    borderRadius: 10,
    marginBottom: 20,
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  name: {
    fontSize: 18,
    color: '#6c757d',
  },
  price: {
    fontSize: 18,
    color: '#007bff',
  },
});

export default ProductDetailScreen;
