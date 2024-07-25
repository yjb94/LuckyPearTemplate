import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { RootStackParamList } from 'screens';
import { Text, ThumbImage } from 'shared/ui';

export type ImageListItemProps = ImageType;

const ImageListItem: React.FC<ImageListItemProps> = ({
  id,
  uri,
  thumbhash,
}) => {
  const { styles } = useStyles(stylesheet);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleItemPress = () => {
    navigation.navigate('ImageDetail', { id });
  };

  return (
    <Pressable
      onPress={handleItemPress}
      style={styles.container}
    >
      <Text>{id}</Text>
      <ThumbImage
        thumbhash={thumbhash}
        source={{ uri: uri }}
        style={styles.image}
      />
    </Pressable>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 6,
    paddingHorizontal: 12,
  },
  image: {
    height: 100,
    marginLeft: 12,
    width: 100,
  },
}));

export default ImageListItem;
