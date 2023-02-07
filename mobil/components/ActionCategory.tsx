import { View, Text, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';

interface IActionCategoryProps {
  img: string;
  title: string;
  category: string;
  menuId: string;
  screen: string;
}

const ActionCategory: React.FC<IActionCategoryProps> = ({
  img,
  title,
  category,
  menuId,
  screen,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootParamList>>();

  const handlePress = () => {
    navigation.navigate('DetailScreen', {category: category});
  };

  return (
    <TouchableHighlight onPress={handlePress} className={`mt-2`}>
      <View className=" bg-green-500 rounded-lg relative flex justify-center items-center">
        <Text className="text-white absolute z-20 ">{title}</Text>
        <View className="absolute left-0 top-0 w-full h-full bg-black z-10 opacity-40"></View>
        <Image
          source={{
            uri: img,
          }}
          className={'w-full h-[100] border'}
        />
      </View>
    </TouchableHighlight>
  );
};

export default ActionCategory;
