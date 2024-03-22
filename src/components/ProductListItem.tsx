import Colors from '@/src/constants/Colors';
import { StyleSheet,Text, View, Image, Pressable } from 'react-native';
import products from '../../assets/data/products'
import { Product } from '../types'
import { Link } from 'expo-router';
const product = products[0];

type ProductListItemProps = {
    product: Product;
}

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';


const ProductListItem = ({product}: ProductListItemProps) => {
 
  return (
    <Link href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
        <Image resizeMode='contain'  source={{uri: product.image || defaultPizzaImage}} style={styles.image}/>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
    </Pressable>
    </Link>

  );

}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
      flex: 1,
      maxWidth: '50%'
  },
  
  image: {
    width: '100%',
    aspectRatio: 1
  },
  title: {
    fontSize: 20, 
    fontWeight: '600',
    marginVertical: 10,

  },

  price: {
    color: Colors.light.tint,
    fontWeight: 'bold', 
    
  },
});
