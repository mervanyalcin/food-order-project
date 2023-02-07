import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface IDetailCategoryScreen {
  navigation: any;
  route: any;
}
const DetailCategory = ({route, navigation}: IDetailCategoryScreen) => {
  const {category} = route.params;
  const [categories, setCategories] = useState<Array<string> | null>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await axios.get(
        `http://192.168.1.107:5000/product/${category}`,
      );
      setCategories(result.data);
      if (result.status === 200) {
        console.log('Registration successfull!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="px-1 py-6">
      <View className="w-full bg-gray-200 py-2 px-6">
        <Text className="text-2xl text-black capitalize">{category}</Text>
      </View>

      <ScrollView className="px-2 mt-4">
        {categories ? (
          categories.map((product: any, index: any) => (
            <View className="flex flex-row">
              <Image
                source={{uri: product.img_url}}
                className="w-32 h-[90] mr-2"
              />
              <View className='flex align-middle justify-between'>
                <Text className="text-black font-semibold">
                  {product.product_name}
                </Text>
                <Text className="text-black font-semibold">
                  {product.price}
                </Text>
                <Text className="text-black font-semibold">
                  {product.description}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailCategory;
