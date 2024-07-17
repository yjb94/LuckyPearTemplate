import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreenProps } from './HomeScreen';

export type RootStackParamList = {
  Home: HomeScreenProps;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
