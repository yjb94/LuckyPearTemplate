import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreenProps } from './HomeScreen';
import { ImageDetailScreenProps } from './ImageDetailScreen';

export type RootStackParamList = {
  Home: HomeScreenProps;
  ImageDetail: ImageDetailScreenProps;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
