import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Product } from '../types'; 

const { width } = Dimensions.get('window');

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image_link }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: width - 20,
    alignSelf: 'center',
  },
  image: {
    width: width / 4,
    height: width / 4,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
    width: width - width / 4 - 40,
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  name: {
    fontSize: 14,
    color: '#6c757d',
  },
  price: {
    fontSize: 14,
    color: '#007bff',
  },
});

export default ProductCard;
