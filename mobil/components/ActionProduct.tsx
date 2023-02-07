import { View, TouchableHighlight } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';

interface IActionProductProps {
  img: string;
  title: string;
  category: string;
}

const ActionProduct: React.FC<IActionProductProps> = ({
  img,
  title,
  category,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootParamList>>();

  const handlePress = () => {
    navigation.navigate('DetailScreen', {category: category});
  };

  return (
    <TouchableHighlight onPress={handlePress} className={`mt-2`}>
      <View className=" bg-green-500 rounded-lg relative flex justify-center items-center">

      </View>
    </TouchableHighlight>
  );
};

export default ActionProduct;
