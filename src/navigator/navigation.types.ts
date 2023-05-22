/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import type {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

export type RootStackParamList = {
  // Sample: undefined;
  // LangTest: undefined;
  Home: undefined;
  Menu: undefined;
  Settings: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type RootPageUrlType = Record<
  keyof RootStackParamList,
  keyof RootStackParamList
>;

export const ROOT_PAGE_URL: RootPageUrlType = {
  Home: 'Home',
  Menu: 'Menu',
  Settings: 'Settings',
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
