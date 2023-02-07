import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  useColorScheme, 
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ActionCategory from '../components/ActionCategory';

interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [categories, setCategories] = useState<Array<string> | null>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const result = await axios.get('http://192.168.1.107:5000/category');
      setCategories(result.data);
      if (result.status === 200) {
        console.log('Registration successfull!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="pb-80">
      <StatusBar
        animated={true}
        backgroundColor={`${isDarkMode ? 'red' : 'green'}`}
      />
      <TouchableOpacity className="mt-2 pl-1 relative">
        <Image
          className="w-[400] h-[140] self-center"
          source={require('../assets/img/logo.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text className="text-center mt-2 ">Habil Pizza Hızlı Sipariş Hattı</Text>
      <Text className="text-center">
        Siparişinizi buradan doğrudan şefe iletebilirsiniz!
      </Text>
 
      <ScrollView className="px-2 mt-4">
        {categories ? (
          categories.map((category: any, index: any) => (
            <ActionCategory
              img={category?.img_url}
              title={category?.title}
              screen={'Detail'}  
              category={category?.cat_name}
              menuId={category?.id}
            />  
          )) 
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
