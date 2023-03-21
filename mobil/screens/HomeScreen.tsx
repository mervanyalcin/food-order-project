import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  useColorScheme, TouchableOpacity
} from 'react-native';
import { getAllCategory } from '../api/Api';
import ActionCategory from '../components/ActionCategory';

interface HomeScreenProps { }
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [categories, setCategories] = useState<Array<any> | null>([]);

  React.useEffect(() => {
    getAllCategory().then((data: any) => {
      setCategories(data.data)
    }).catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <SafeAreaView className="px-4 py-6 bg-red-100 flex-1">
      <StatusBar
        animated={true}
        backgroundColor={`${isDarkMode ? 'red' : 'green'}`}
      />

      <ScrollView className="px-2 mb-6 mt-4">
        <TouchableOpacity className="mt-2 pl-1 relative">
          <Image
            className="w-[400] h-[140] self-center"
            source={require('../assets/logo.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-center mt-2 ">Habil Pizza Hızlı Sipariş Hattı</Text>
        <Text className="text-center">
          Siparişinizi buradan doğrudan şefe iletebilirsiniz!
        </Text>

        <ScrollView className="px-2 mt-4">
          {
            categories?.map((data: any, index: any) => (
              <ActionCategory
                key={index}
                img={data?.img}
                title={data?.name}
                screen={data?.name}
                menuId={data?.id}
              />
            ))
          }
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
