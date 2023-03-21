import {
  View,
  Text, SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  Button
} from 'react-native';
import React, { useState } from 'react';
import { getProductByCategoryName } from '../api/Api';

interface IDetailCategoryScreen {
  navigation: any;
  route: any;
}
const DetailCategory = ({ route, navigation }: IDetailCategoryScreen) => {
  const { screen } = route.params;
  const [categories, setCategories] = useState<Array<string> | null>([]);
  const screenWidth = Dimensions.get('window').width;

  React.useEffect(() => {
    getProductByCategoryName(screen).then((data: any) => {
      setCategories(data.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [screen])

  return (
    <SafeAreaView className="px-4 py-6 bg-gray-100 flex-1">
      <View className="w-full bg-white py-4 px-6">
        <Text className="text-2xl text-red-400 capitalize font-extrabold tracking-widest">{screen}</Text>
      </View>

      <ScrollView className="mt-4 flex-1" >
        {categories ? (
          categories.map((product: any, index: any) => (
            <View className='py-6 mb-2 flex-row flex bg-white w-full items-center' key={index}>
              <Image
                source={{ uri: product.img }}
                className="w-32 h-[90] mr-2"
              />
              <View className='align-middle justify-between flex-1 px-2 gap-y-1'>
                <Text className="text-black font-semibold uppercase">
                  {product.name}
                </Text>
                <Text className="text-black font-light text-xs ">
                  {product.description}
                </Text>
                <Text className="font-semibold text-green-500 ">
                  {product.price} ₺
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>

      <Button accessibilityLabel='fefwfw' title='Anasayfaya Dön' color={'#841584'} onPress={()=> navigation.navigate('Home')} />
      
    </SafeAreaView>
  );
};

export default DetailCategory;
