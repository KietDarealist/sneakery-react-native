export enum Screens {
  //auth
  LOGIN = 'LOGIN',

  //main
  MAIN = 'MAIN',

  WELCOME = 'WELCOME',

  //product
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
}

export interface RootStackParamList {
  LOGIN: string;
  WELCOME: string;
  MAIN: string;

  PRODUCT_DETAIL: string;
}
